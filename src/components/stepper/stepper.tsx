import * as React from "react";
import { stepperVariants, stepVariants, StepperVariants, StepVariants } from "./variants.js";
import { cn } from "../../../templates/utils/cn.js";

export type Step = {
  label: React.ReactNode;
  value: string;
  completed?: boolean;
  disabled?: boolean;
};

type StepperProps = React.HTMLAttributes<HTMLDivElement> & {
  steps: Step[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: StepperVariants["size"];
};

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    { steps, value, defaultValue, onChange, size = "md", className, ...props },
    ref
  ) => {
    const [selected, setSelected] = React.useState(defaultValue || steps[0]?.value);
    const controlled = value !== undefined;
    const current = controlled ? value : selected;

    const handleStepClick = (val: string, disabled?: boolean) => {
      if (disabled) return;
      if (!controlled) setSelected(val);
      onChange?.(val);
    };

    return (
      <div ref={ref} className={cn(stepperVariants({ size }), className)} {...props}>
        {steps.map((step, i) => {
          const isActive = current === step.value;
          const isCompleted = !!step.completed;
          return (
            <React.Fragment key={step.value}>
              <button
                type="button"
                className={cn(
                  stepVariants({ active: isActive, completed: isCompleted }),
                  "flex flex-col items-center focus:outline-none",
                  step.disabled && "opacity-50 cursor-not-allowed"
                )}
                aria-current={isActive ? "step" : undefined}
                aria-disabled={step.disabled}
                disabled={step.disabled}
                onClick={() => handleStepClick(step.value, step.disabled)}
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full border-2 mb-1"
                  style={{
                    borderColor: isCompleted ? "#16a34a" : isActive ? "#2563eb" : "#d1d5db",
                    background: isCompleted ? "#bbf7d0" : isActive ? "#dbeafe" : "#f3f4f6",
                  }}
                >
                  {isCompleted ? "✓" : i + 1}
                </span>
                <span>{step.label}</span>
              </button>
              {i < steps.length - 1 && (
                <span className="flex-1 h-0.5 bg-gray-300 w-8" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
);
Stepper.displayName = "Stepper";
