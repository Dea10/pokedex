import './PaginationControl.css';

const PaginationControl = ({ previous, next, isFinalPage, handleOnPrev, handleOnNext }) => {
    return (
        <div className="pagination-buttons-container">
                <button
                    disabled={!previous}
                    onClick={handleOnPrev}
                >
                    Prev
                </button>
                <button
                    disabled={!next || isFinalPage}
                    onClick={handleOnNext}
                >
                    Next
                </button>
            </div>
    )
}

export default PaginationControl;