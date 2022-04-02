// Your JS-based app needs to make two requests to an external API to fetch two sets of data: customers and orders. Due to how you'll need to use this data, a good strategy is to match and merge the two lists into one: a list of customers where each item can have a nested list of orders.
//Build a denormalize function which takes in two arrays and the reference ID (foreign key), the first one being the primary type (in this case denormalize(customers, orders, 'customerId')), and returns a new array with the nested structure described above.
//You can check the test file (with a couple of example cases) in the filesystem tab to your left.

function denormalize({ primary, related, relatedName, referenceId }) {
  return primary.map((item) => {
    const relatedItems = related.filter((relatedItem) => {
      return relatedItem[referenceId] === item.id;
    });
    return {
      ...item,
      [relatedName]: relatedItems,
    };
  });
}
