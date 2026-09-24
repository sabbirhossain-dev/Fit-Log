import { IWorkout } from "@/types/type";

interface IPropsId {
  params: Promise<{ id: string }>;
}
const CardId = async ({ params }: IPropsId) => {
  const { id } = await params;

  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();

  const workout = data.find((item: IWorkout) => item.id === Number(id));

  if (!workout) {
    return <div className="text-white">Workout not found</div>;
  }

  return (
    <div className="container text-white">
      <h1>{workout.name}</h1>
    </div>
  );
};

export default CardId;
