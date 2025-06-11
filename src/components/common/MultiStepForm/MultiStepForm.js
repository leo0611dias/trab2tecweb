import React, { useState, useRef } from "react";
import NavigationButton from "./NavigateButton";
import ProgressBar from "./ProgressBar";

/**
 * Espera-se que cada componente de etapa (list[n].component) aceite uma prop "ref"
 * para expor o método validate.
 */
function MultiStepForm({ list, displayProgressBar, proceedNext = true }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const stepRefs = useRef([]);

    // Avançar apenas se validado
    const goNext = async () => {
        const ref = stepRefs.current[selectedIndex];
        if (ref && typeof ref.validate === "function") {
            const valid = await ref.validate();
            if (!valid) return; // Não avança se inválido
        }
        if (selectedIndex !== list.length - 1)
            setSelectedIndex(selectedIndex + 1);
    };

    const goPrevious = () => {
        if (selectedIndex !== 0)
            setSelectedIndex(selectedIndex - 1);
    };

    return (
        <>
            <div className={"wrapper wrapper-content "}>
                <br />
                <div className="row">
                    <div className="col-lg-3"></div>
                </div>
                {displayProgressBar && (<ProgressBar list={list} selectedIndex={selectedIndex} />)}
                <div className="row form-container">
                    <div className="col-lg-12">
                        {
                            React.cloneElement(
                                list[selectedIndex].component,
                                { ref: el => stepRefs.current[selectedIndex] = el }
                            )
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="modal-footer">
                            <div className="col-lg-6">
                                <NavigationButton
                                    goNext={goNext}
                                    goPrevious={goPrevious}
                                    selectedIndex={selectedIndex}
                                    list={list}
                                    proceedNext={proceedNext}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MultiStepForm;
