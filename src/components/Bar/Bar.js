import { useState } from "react";
import './Bar.css'

const Bar = ({value}) => {
	const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			height: `${value}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="array-bar-background">
			<div className="array-bar-foreground" style={style}>
				{value}
			</div>
		</div>
	)
}

export default Bar;