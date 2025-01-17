// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get('https://lambda-times-backend.herokuapp.com/topics').then(resp => {
  console.log('Tabs ', resp.data.topics);
  resp.data.topics.forEach(item => {
    topics.appendChild(makeTabs(item));
  });
});

function makeTabs(data) {
  // Create Elements
  const tab = document.createElement('div');

  // Add class
  tab.classList.add('tab');

  // Add Values
  tab.textContent = data;

  return tab;
}

const topics = document.querySelector('.topics');
