import { ReadingDifficult } from "@/types";
import { translateDifficultStatus } from "@/utils";

interface IProps { difficult: ReadingDifficult };

const DificultStatus = ({ difficult }: IProps) => {

    return (
        <div className="w-full flex flex-row justify-center items-center absolute bottom-5 right-0 left-0">
            <div className="w-1/4">
                <div className="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Dificultad:
                        <div className="badge badge-secondary badge-outline mx-4 px-2">{translateDifficultStatus(difficult)}</div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DificultStatus;