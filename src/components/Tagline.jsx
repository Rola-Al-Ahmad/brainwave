import brackets from "../assets/svg/Brackets"

const Tagline = ({ className, children }) => {
    return (
        <div className={`tagline flex items-center ${className || ""}`}>
            {brackets("left")}
            <div className="max-3 text-n-3">
                &nbsp;&nbsp;{children}&nbsp;&nbsp;
            </div>
            {brackets("right")}
        </div>
    )
}

export default Tagline