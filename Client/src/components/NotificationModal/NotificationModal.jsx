import "../NotificationModal/NotificationModal.css"

function NotificationModal({ type, message, onClose }) {

    const isSuccess = type === "success"

    return (
        <div className={`notif-overlay ${type}`} onClick={onClose}>
            <div className="notif-card" onClick={(e) => e.stopPropagation()}>

                {/* Top accent bar — handled by CSS ::before */}

                {/* Icon */}
                <div className="notif-icon">
                    {isSuccess ? "✅" : "❌"}
                </div>

                {/* Title */}
                <p className="notif-title">
                    {isSuccess ? "Success!" : "Something went wrong!"}
                </p>

                {/* Message */}
                <p className="notif-message">{message}</p>

                {/* Close button */}
                <button className="notif-close-btn" onClick={onClose}>
                    {isSuccess ? "Great!" : "Try Again"}
                </button>

            </div>
        </div>
    )
}

export default NotificationModal
