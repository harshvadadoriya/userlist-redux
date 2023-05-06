interface ProgressBarProp {
	progressPercentage: number;
}

const ProgressBar = ({ progressPercentage }: ProgressBarProp): JSX.Element => {
	return (
		<div className="w-full mt-2 h-[5px] bg-orange-100 rounded-full">
			<div
				style={{ width: `${progressPercentage}%` }}
				className={`h-full text-center text-xs text-white bg-custom-orange rounded-full ${progressPercentage}`}
			></div>
		</div>
	);
};

export default ProgressBar;
