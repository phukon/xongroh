const Tab = ({ tabName, tabText, count, activeTab, onTabClick }) => {
  const isActive = activeTab === tabName

  return (
    <div
      className={`p-2 px-3 ${
        isActive
          ? 'font-semibold underline decoration-inherit decoration-solid underline-offset-8'
          : 'font-semibold '
      }`}
      onClick={() => onTabClick(tabName)}
    >
      {tabText}
      <span className="text-xs">({count})</span>
    </div>
  )
}
export default Tab
