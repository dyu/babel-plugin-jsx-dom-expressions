const Child = props => (
  <>
    <div>Hello {props.name}</div>
    <div>{props.children}</div>
  </>
);

const someProps = {some: 'stuff', more: 'things'}

const template = (
  <div>
    <Child name='John' {...someProps}>
      <div>From Parent</div>
    </Child>
    <Child name='Jason'>
      <div>{state.content}</div>
    </Child>
    <Context.Consumer>{ context =>
      context
    }</Context.Consumer>
  </div>
)

const template2 = (
  <Child name='Jake' dynamic={( state.data )} handleClick={ clickHandler } />
)