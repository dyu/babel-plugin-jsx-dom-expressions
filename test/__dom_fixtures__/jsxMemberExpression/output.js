import { template as _$template } from "r-dom";
import { createComponent as _$createComponent } from "r-dom";

const _tmpl$ = _$template(`<namespace:tag></namespace:tag>`);

const template = _$createComponent(module.A, {});

const template2 = _$createComponent(module.a.B, {});

const template3 = _$createComponent(module.A.B, {});

const template4 = _tmpl$.cloneNode(true);
