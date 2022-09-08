const Loading = ({loading=null, error=null}) => {
  if (loading) {
    return <div className="loading">
      <div className="circle"></div>
    </div>
  }

  if (error) {
    return <div className="error-message">{error}</div>
  }
}

export default Loading