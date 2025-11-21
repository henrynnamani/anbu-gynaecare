export const predictCycle = (
  last_period_date: Date,
  period_length: number,
  cycle_length: number,
) => {
  const nextStart = new Date(last_period_date);
  nextStart.setDate(nextStart.getDate() + cycle_length);

  const nextEnd = new Date(nextStart);
  nextEnd.setDate(nextEnd.getDate() + period_length);

  const ovulation = new Date(nextStart);
  ovulation.setDate(ovulation.getDate() - 14);

  return {
    predicted_period_start: nextStart,
    predicted_period_end: nextEnd,
    predicted_ovulation: ovulation,
  };
};
