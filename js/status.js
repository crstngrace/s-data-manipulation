const data = [
  {
    id: 1,
    name: 'John Doe',
    status: 1
  },
  {
    id: 2,
    name: 'Jane Doe',
    status: 2
  },
  {
    id: 3,
    name: 'Adam Rocket',
    status: 2
  },
  {
    id: 4,
    name: 'Luis Rocket',
    status: 1
  }
];

const newData = data.reduce(function (result, dt) {
  if (!result.hasOwnProperty([`status-${dt.status}`])) {
    result[`status-${dt.status}`] = [];
  }

  result[`status-${dt.status}`].push(dt);

  return result;
}, {});

console.log(newData);
