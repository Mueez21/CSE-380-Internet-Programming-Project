import { notFound } from "next/navigation";
import { USER_PROGRAMS } from "@/src/constants/index";
import { Dumbbell, AppleIcon, ShieldIcon, Users, Clock, Sparkles } from "lucide-react";

interface Props {
  params: { id: string };
}

export default function ProgramDetailsPage({ params }: Props) {
  const program = USER_PROGRAMS.find((p) => String(p.id) === params.id);

  if (!program) return notFound();

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 bg-background">
      <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg shadow-lg max-w-3xl w-full mx-auto p-8">
        <div className="flex items-center gap-6 mb-8">
          <img
            src={program.profilePic}
            alt={program.first_name}
            className="w-24 h-24 rounded-full border border-border object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-1">
              {program.first_name}
              <span className="text-primary">.exe</span>
            </h1>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Users className="h-5 w-5" />
              {program.age}y • {program.workout_days}d/week
              <span className="ml-4 px-2 py-0.5 bg-primary/10 text-primary rounded text-xs">
                {program.fitness_level}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">{program.fitness_goal}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Version: v3.5</span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Dumbbell className="h-5 w-5 text-primary" />
            {program.workout_plan.title}
          </h2>
          <p className="text-muted-foreground mb-2">{program.equipment_access}</p>
          <p className="text-base">{program.workout_plan.description}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <AppleIcon className="h-5 w-5 text-secondary" />
            {program.diet_plan.title}
          </h2>
          <p className="text-base">{program.diet_plan.description}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <ShieldIcon className="h-5 w-5 text-primary" />
            AI Safety Protocols
          </h2>
          <p className="text-base text-muted-foreground">Protection systems enabled</p>
        </div>
      </div>
    </div>
  );
}