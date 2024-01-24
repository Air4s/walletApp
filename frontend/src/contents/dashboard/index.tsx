

const Dashboard = () => {
    return (
        <div className="h-screen bg-blue-200"> {/* Temporary, since the coming soon image is not yet available */}
            <div className="h-full flex justify-center items-center">
                <div className='h-60 w-60 bg-gray-300 flex justify-center items-center rounded-lg'>
                  <div className='text-[#504026] font-semibold'> Coming Soon . . . </div>
                  {/* link for color palette: https://colorhunt.co/palette/0a1d56492e8737b5b6f2f597 */}
                  {/* link for dashboard layout: https://www.uplabs.com/posts/finance-website-dashboard-free-ui-kit-template7 */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard