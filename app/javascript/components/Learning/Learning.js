import React, { Fragment } from 'react';
import Nav from '../Nav/Nav';

const Learning = () => {
  return(
    <>
      <Nav />
      <section className="container">
        <h1 className="text-center">Bits about plastic</h1>
        <h2>What is plastic pollution?</h2>
        <p className="text-justify">It’s plastic where it shouldn’t be. It’s in the sea and on the beach and it’s causing harm. We’re using more plastic than ever, it’s durable, cheap to produce and we’re consuming it at staggering rates. Current estimates show that at last 8 million pieces of plastic are entering the oceans every single day.</p>
        <h2>How much plastic is there?</h2>
        <p className="text-justify">
        Approximately 51 trillion microscopic pieces of plastic, weighing 269,000 tons. That is about the same as 1345 adult blue whales. And 500 times the number of stars in our galaxy. I know which I would rather see.
        </p>
        <h2>How long does it last?</h2>
        <p className="text-justify">
        As we know, plastic is strong, flexible and durable making it extremely useful, however that also means it never really breaks down. A plastic bottle can last for 450 years in the marine environment, slowly fragmenting into smaller and smaller pieces which eventually end up microscopic but never truly go away. This means that every piece of plastic that has ever been produced is still with us, in some form. Yuck!
        </p>
        <h2>What harm does plastic pollution does to the environment?</h2>
        <p className="text-justify">
        For wildlife such as fish, dolphins, seabirds and seals it can be deadly as they become entangled or mistake it for food. Images from the Midway Atoll have illustrated this problem to shocking effect when photographer Chris Jordan captured the remains of albatross, stomachs full of plastic pieces because they accidentally made a meal from our discarded waste. More recently a Cuvier’s beaked whale was found malnourished and dying off the coast of Norway.
        </p>
        <p>
        Experts had to put the animal down as it was in such poor condition and the autopsy showed a terrifying 30 plasic bags and a large amount of plastic packaging with labels in Danish and English in its stomach and intestines, causing bloackages and pain.</p>
        <p>Information taken from <a className="italic" href="https://www.sas.org.uk/our-work/plastic-pollution/plastic-pollution-facts-figures/"> Surfers against sewage </a>
      </p>
      </section>
    </>
  )
}

export default Learning
