import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface CharacterFilterPanelProps {
	filters: {
		classes: string[];
		levelMin: number;
		levelMax: number;
	};
	onChange: (filters: CharacterFilterPanelProps["filters"]) => void;
}

const availableClasses = [
	"Paladin",
	"Wizard",
	"Rogue",
	"Fighter",
	"Cleric",
	"Barbarian",
	"Ranger",
	"Bard",
];

export function CharacterFilterPanel({
	filters,
	onChange,
}: CharacterFilterPanelProps) {
	const toggleClass = (className: string) => {
		const newClasses = filters.classes.includes(className)
			? filters.classes.filter((c) => c !== className)
			: [...filters.classes, className];
		onChange({ ...filters, classes: newClasses });
	};

	return (
		<Card className="p-4 space-y-4 bg-card">
			<div>
				<Label className="text-sm font-semibold mb-3 block">Class</Label>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
					{availableClasses.map((className) => (
						<div key={className} className="flex items-center space-x-2">
							<Checkbox
								id={className}
								checked={filters.classes.includes(className)}
								onCheckedChange={() => toggleClass(className)}
							/>
							<label
								htmlFor={className}
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
							>
								{className}
							</label>
						</div>
					))}
				</div>
			</div>

			<div>
				<Label className="text-sm font-semibold mb-3 block">
					Level Range: {filters.levelMin} - {filters.levelMax}
				</Label>
				<Slider
					min={1}
					max={20}
					step={1}
					value={[filters.levelMin, filters.levelMax]}
					onValueChange={([min, max]) =>
						onChange({ ...filters, levelMin: min, levelMax: max })
					}
					className="w-full"
				/>
			</div>
		</Card>
	);
}
