/* eslint-disable */

// Define the arrays for pronouns, adjectives, and nouns
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

// Function to generate domain names
function generateDomainNames(pronoun, adj, noun) {
  let domains = [];
  // Nested loops to combine each element from pronoun, adj, and noun
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        domains.push(`${p}${a}${n}.com`);
        domains.push(`${p}${a}${n}.net`);
        domains.push(`${p}${a}${n}.us`);
      }
    }
  }
  return domains;
}

// Generate the domain names
let domainNames = generateDomainNames(pronoun, adj, noun);

// Log the domain names to the console
console.log("Possible domain names:");
domainNames.forEach((domain) => console.log(domain));
