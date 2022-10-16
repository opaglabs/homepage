export const listenOpts = {
  hasPassive: false,
  passiveCapture: true,
  notPassiveCapture: true,
};

export function position(e) {
  if (e.touches && e.touches[0]) {
    e = e.touches[0];
  } else if (e.changedTouches && e.changedTouches[0]) {
    e = e.changedTouches[0];
  } else if (e.targetTouches && e.targetTouches[0]) {
    e = e.targetTouches[0];
  }

  return {
    top: e.clientY,
    left: e.clientX,
  };
}

export function stop(e) {
  e.stopPropagation();
}

export function addEvt(ctx, targetName, events) {
  const name = `__q_${targetName}_evt`;

  ctx[name] = ctx[name] !== void 0 ? ctx[name].concat(events) : events;

  events.forEach((evt) => {
    evt[0].addEventListener(evt[1], ctx[evt[2]], listenOpts[evt[3]]);
  });
}

export function cleanEvt(ctx, targetName) {
  const name = `__q_${targetName}_evt`;

  if (ctx[name] !== void 0) {
    ctx[name].forEach((evt) => {
      evt[0].removeEventListener(evt[1], ctx[evt[2]], listenOpts[evt[3]]);
    });
    ctx[name] = void 0;
  }
}

export default {
  position,
  stop,
  addEvt,
  cleanEvt,
};
