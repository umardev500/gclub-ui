import React from 'react'

export const SidebarMenuList: React.FC = () => {
    return (
        <div className="flex flex-col gap-8 pt-2">
            <a href="#" className="text-sky-500 px-4">
                <svg className="w-6 h-6" fill="currentColor" focusable="false" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,3H4A1,1,0,0,0,3,4V8A1,1,0,0,0,4,9h6a1,1,0,0,0,1-1V4A1,1,0,0,0,10,3ZM9,7H5V5H9Zm1,4H4a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V12A1,1,0,0,0,10,11ZM9,19H5V13H9Zm11-4H14a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V16A1,1,0,0,0,20,15Zm-1,4H15V17h4ZM20,3H14a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3Zm-1,8H15V5h4Z"></path>
                </svg>
            </a>
            <a href="#" className="text-gray-400 px-4">
                <svg className="w-6 h-6" fill="currentColor" focusable="false" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,6Zm7.89,12.55L18,14.66A3,3,0,0,0,15.26,13H8.74a3,3,0,0,0-2.69,1.66L4.11,18.55A1,1,0,0,0,5,20H19A1,1,0,0,0,19.89,18.55ZM6.62,18l1.22-2.45a1,1,0,0,1,.9-.55h6.52a1,1,0,0,1,.9.55L17.38,18Z"></path>
                </svg>
            </a>
            <a href="#" className="text-gray-400 px-4">
                <svg className="w-6 h-6" fill="currentColor" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="GridViewIcon">
                    <path fill-rule="evenodd" d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"></path>
                </svg>
            </a>
            <a href="#" className="text-gray-400 px-4">
                <svg className="w-6 h-6" fill="currentColor" focusable="false" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21,5.5v1a.5.5,0,0,1-.5.5H9.5A.5.5,0,0,1,9,6.5v-1A.5.5,0,0,1,9.5,5h11A.5.5,0,0,1,21,5.5ZM20.5,11H9.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,20.5,11Zm0,6H9.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,20.5,17ZM5,4A2,2,0,1,0,7,6,2,2,0,0,0,5,4Zm0,6a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm0,6a2,2,0,1,0,2,2A2,2,0,0,0,5,16Z"></path>
                </svg>
            </a>
            <a href="#" className="text-gray-400 px-4">
                <svg className="w-6 h-6" fill="currentColor" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="PersonAddIcon">
                    <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
            </a>

            <a href="#" className="text-gray-400 flex justify-center px-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.52786 16.7023C6.6602 18.2608 8.3169 19.3584 10.1936 19.7934C12.0703 20.2284 14.0409 19.9716 15.7434 19.0701C17.446 18.1687 18.766 16.6832 19.4611 14.8865C20.1562 13.0898 20.1796 11.1027 19.527 9.29011C18.8745 7.47756 17.5898 5.96135 15.909 5.02005C14.2282 4.07875 12.2641 3.77558 10.3777 4.16623C8.49129 4.55689 6.80919 5.61514 5.64045 7.14656C4.47171 8.67797 3.89482 10.5797 4.01579 12.5023M4.01579 12.5023L2.51579 11.0023M4.01579 12.5023L5.51579 11.0023"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path d="M12 8V12L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </a>
            <a href="#" className="text-gray-400 px-4">
                <svg className="w-6 h-6" fill="currentColor" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="LoginIcon">
                    <path d="M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"></path>
                </svg>
            </a>
        </div>
    )
}
