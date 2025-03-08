// HandleCheckboxChange.ts
export function HandleCheckboxChange(
  index: number,
  selectedWorkouts: number[],
  setSelectedWorkouts: (
    workouts: number[] | ((prev: number[]) => number[])
  ) => void
) {
  setSelectedWorkouts((prevSelected) => {
    if (prevSelected.includes(index)) {
      // If the workout is already selected, remove it from the list
      return prevSelected.filter((item) => item !== index);
    } else {
      // If not selected, add it to the list
      return [...prevSelected, index];
    }
  });
}
