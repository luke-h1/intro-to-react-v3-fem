const MyTitle = function (props) {
  return React.createElement('div', null, React.createElement('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function () {
  return React.createElement(
    'div',
    null,
    React.createElement(MyTitle, {
      title: 'Game of thrones',
      color: 'YellowGreen',
    }),
    React.createElement(MyTitle, {
      title: 'Stranger things',
      color: 'GreenYellow',
    }),
    React.createElement(MyTitle, {
      title: 'Rick & Morty',
      color: 'LimeGreen',
    }),
    React.createElement(MyTitle, {
      title: 'Silicon valley',
      color: 'Lime',
    })
  );
};

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
