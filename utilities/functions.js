export const rafThrottle = (fn) => {
  let ticking = false;

  return () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        fn();
        ticking = false;
      });

      ticking = true;
    }
  };
};

export function nextTick(fn) {
  return setTimeout(fn, 0);
}

export function once(fn) {
  const f = function (...args) {
    if (f.called) return f.value;
    f.called = true;
    return f.value = fn.apply(this, args);
  };
  f.called = false;
  return f;
}

export function fromEntries(iterable) {
  return [...iterable].reduce((obj, [key, val]) => {
    obj[key] = val
    return obj
  }, {})
}
