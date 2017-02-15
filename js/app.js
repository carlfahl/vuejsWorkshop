var app1 = new Vue({
  el: '#app1',
  data: {
    message: "Hello from the View App.",
    greeting: "My name is Carl."
  }
});

// Equalvalent Jquery method
// $('#showBtn').on('click', function () {
  // $('myHead').toggle();
// });

var app2 = new Vue({
  el: '#app2',
  data: {
    show: false
  }
});

// v-for="t in todos" === todos.map(function (t) {})

var ts = [
  { text: 'Learn JavaScript' },
  { text: 'Learn Vue' },
  { text: 'Build something awesome' }
];

var app3 = new Vue({
  el: '#app3',
  data: {todos: ts}
})

var fishies = [
  { type: "halibut", ocean: "pacific" },
  { type: "atlantic salmon", ocean: "atlantic" },
  { type: "blue tuna", ocean: "indian" },
  { type: "puffer fish", ocean: "caribbean" },
  { type: "clown fish", ocean: "caribbean" },
  { type: "squid", ocean: "pacific" },
  { type: "king fish", ocean: "atlantic" },
  { type: "blue tang", ocean: "pacific" },
  { type: "red fish", ocean: "indian" },
  { type: "blue fish", ocean: "atlantic" },
  { type: "one fish", ocean: "arctic" },
];

var pacificFish = [];
for (var i=0; i<fishies.length; i++) {
  if (fishies[i].ocean === 'pacific') {
    pacificFish.push(fishies[i]);
  }
}

var caribbeanFish = fishies.filter(function (item) {
  return item.ocean === 'caribbean';
});

var app4 = new Vue({
  el: '#app4',
  data: {
    fishData: [
      {
        title: 'All Fish',
        data: fishies
      },
      {
        title: "Pacific Fish",
        data: pacificFish
      },
      {
        title: "Caribbean Fish",
        data: caribbeanFish
      }
    ]
  }
});
