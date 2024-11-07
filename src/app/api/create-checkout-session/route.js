import { NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { plan, billingInterval } = await req.json();
    
    console.log('Received plan:', plan); // Debug log
    console.log('Billing interval:', billingInterval); // Debug log

    const monthlyPrice = plan.monthlyPrice;
    
    if (!monthlyPrice || isNaN(monthlyPrice)) {
      console.error('Invalid monthly price:', monthlyPrice);
      throw new Error('Invalid price amount');
    }

    // Calculate final price based on billing interval
    let finalPrice;
    if (billingInterval === 'yearly') {
      finalPrice = monthlyPrice * 12;
    } else if (billingInterval === 'quarterly') {
      finalPrice = monthlyPrice * 3;
    } else {
      finalPrice = monthlyPrice;
    }
    
    console.log('Final price:', finalPrice); // Debug log
    
    const priceInCents = Math.round(finalPrice * 100);
    
    // Create a product first
    const product = await stripe.products.create({
      name: `${plan.title} - ${billingInterval} plan`,
      description: `${plan.title} subscription billed ${billingInterval}`,
    });

    // Then create a price
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: priceInCents,
      currency: 'usd',
      recurring: {
        interval: billingInterval === 'yearly' ? 'year' : 'month',
        interval_count: billingInterval === 'quarterly' ? 3 : 1,
      },
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: price.id,
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
      billing_address_collection: 'required',
      allow_promotion_codes: false,
      metadata: {
        planTitle: plan.title,
        billingInterval,
        monthlyPrice: monthlyPrice.toString(),
        totalPrice: finalPrice.toString()
      },
      subscription_data: {
        metadata: {
          planTitle: plan.title,
          billingInterval
        }
      }
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}