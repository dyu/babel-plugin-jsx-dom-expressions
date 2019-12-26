import { template as _$template } from "r-dom";
import { For as _$For } from "r-dom";
import { createComponent as _$createComponent } from "r-dom";
import { insert as _$insert } from "r-dom";

const _tmpl$ = _$template(`<div>Hello </div>`),
  _tmpl$2 = _$template(`<div></div>`),
  _tmpl$3 = _$template(`<div>From Parent</div>`);

const Child = props => [
  (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild;

    props.ref && props.ref(_el$);

    _$insert(_el$, () => props.name, null);

    return _el$;
  })(),
  (() => {
    const _el$3 = _tmpl$2.cloneNode(true);

    _$insert(_el$3, () => props.children);

    return _el$3;
  })()
];

const template = props => {
  let childRef;
  const { content } = props;
  return (function() {
    const _el$4 = _tmpl$2.cloneNode(true);

    _$insert(
      _el$4,
      _$createComponent(
        Child,
        Object.assign(
          {
            name: "John"
          },
          Object.keys(props).reduce(
            (m$, k$) => ((m$[k$] = () => props[k$]), m$),
            {}
          ),
          {
            ref: r$ => (childRef = r$),
            booleanProperty: true,
            children: () => _tmpl$3.cloneNode(true)
          }
        ),
        [...Object.keys(props), "children"]
      ),
      null
    );

    _$insert(
      _el$4,
      _$createComponent(
        Child,
        {
          name: "Jason",
          ref: props.ref,
          children: () => {
            const _el$6 = _tmpl$2.cloneNode(true);

            _$insert(_el$6, content);

            return _el$6;
          }
        },
        ["children"]
      ),
      null
    );

    _$insert(
      _el$4,
      _$createComponent(Context.Consumer, {
        children: context => context
      }),
      null
    );

    return _el$4;
  })();
};

const template2 = _$createComponent(
  Child,
  {
    name: "Jake",
    dynamic: () => state.data,
    handleClick: clickHandler
  },
  ["dynamic"]
);

const template3 = _$createComponent(
  Child,
  {
    children: () => [
      _tmpl$2.cloneNode(true),
      _tmpl$2.cloneNode(true),
      _tmpl$2.cloneNode(true),
      "After"
    ]
  },
  ["children"]
);

const template4 = _$createComponent(
  Child,
  {
    children: () => _tmpl$2.cloneNode(true)
  },
  ["children"]
);

const template5 = _$createComponent(
  Child,
  {
    children: () => state.dynamic
  },
  ["children"]
); // builtIns

const template6 = _$createComponent(
  _$For,
  {
    each: () => state.list,
    fallback: () => _$createComponent(Loading, {}),
    children: item => item
  },
  ["each", "fallback"]
);
