import { IWorkout } from "@/types/type";
import Image from "next/image";
import AddButton from "@/components/AddButton";
import SaveButton from "@/components/SaveButton";

interface IPropsId {
  params: Promise<{ id: string }>;
}
const CardId = async ({ params }: IPropsId) => {
  const { id } = await params;

  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data: IWorkout[] = await res.json();

  const workout = data.find((item: IWorkout) => item.id === Number(id));

  if (!workout) {
    return <div className="text-white">Workout not found</div>;
  }

  return (
    <main className="min-h-screen bg-[#0D0F14] px-4 py-8 text-white md:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* LEFT - IMAGE */}
          <div className="overflow-hidden rounded-xl">
            <Image
              src={workout.image}
              alt={`${workout.name} image`}
              width={600}
              height={600}
              className="h-full max-h-[600px] w-full object-cover"
            />
          </div>

          {/* RIGHT - DETAILS */}
          <div className="flex flex-col">
            <div>
              <h1 className="text-[28px] font-bold uppercase tracking-tight md:text-[36px] text-white">
                {workout.name}
              </h1>

              <p className="mt-2 text-[16px] font-normal leading-6 text-[#9CA3AF]">
                {workout.description}
              </p>
            </div>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#CCFF00] px-4 py-1.5 text-xs font-semibold text-[#495160]"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* INFO TABLE */}
            <div className="mt-5 overflow-hidden rounded-xl border border-[#292D36] bg-[#151820]">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b border-[#292D36]">
                    <td className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                      Equipment
                    </td>
                    <td className="px-4 py-3 text-right text-[14px] text-[#E5E7EB] font-medium">
                      {workout.equipment}
                    </td>
                  </tr>

                  <tr className="border-b border-[#292D36]">
                    <td className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                      Difficulty
                    </td>
                    <td className="px-4 py-3 text-right text-[14px] text-[#E5E7EB] font-medium">
                      {workout.difficulty}
                    </td>
                  </tr>

                  <tr className="border-b border-[#292D36]">
                    <td className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                      Sets
                    </td>
                    <td className="px-4 py-3 text-right text-[14px] text-[#E5E7EB] font-medium">
                      {workout.sets}
                    </td>
                  </tr>

                  <tr className="border-b border-[#292D36]">
                    <td className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                      Reps
                    </td>
                    <td className="px-4 py-3 text-right text-[14px] text-[#E5E7EB] font-medium">
                      {workout.reps}
                    </td>
                  </tr>

                  <tr className="border-b border-[#292D36]">
                    <td className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                      Duration
                    </td>
                    <td className="px-4 py-3 text-right text-[14px] text-[#E5E7EB] font-medium">
                      {workout.duration} min
                    </td>
                  </tr>

                  <tr className="border-b border-[#292D36]">
                    <td className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                      Calories
                    </td>
                    <td className="px-4 py-3 text-right text-[14px] text-[#E5E7EB] font-medium">
                      {workout.caloriesBurned} kcal
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                      Rating
                    </td>
                    <td className="px-4 py-3 text-right text-[14px] text-[#E5E7EB] font-medium">
                      {workout.rating}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* INSTRUCTIONS */}
            <div className="mt-5">
              <h2 className="text-[16px] font-extrabold uppercase tracking-wide text-white">
                Instructions
              </h2>

              <ol className="mt-3 space-y-2">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-[14px] leading-5 text-[#D1D5DB]"
                  >
                    <span className="text-[#9CA3AF]">{index + 1}.</span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-3">
              <AddButton data={workout} />
              <SaveButton data={workout} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardId;
