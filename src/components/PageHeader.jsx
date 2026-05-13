import React from 'react';

export default function PageHeader({ title, breadcrumb, children }) {
    // Logika untuk merender breadcrumb secara dinamis
    const renderBreadcrumb = () => {
        if (!breadcrumb) return null;

        // Jika breadcrumb adalah string, ubah jadi array agar konsisten
        const breadcrumbItems = Array.isArray(breadcrumb) ? breadcrumb : [breadcrumb];

        return (
          <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
            <span className="text-gray-400">Home</span>
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-gray-400">/</span>
                <span 
                  className={`capitalize ${
                    index === breadcrumbItems.length - 1 ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {item}
                </span>
              </React.Fragment>
            ))}
          </div>
        );
    };

    return (
        <div id="pageheader-container" className="flex items-center justify-between p-6 bg-white border-b border-gray-100">
            <div id="pageheader-left" className="flex flex-col">
                <h1 id="page-title" className="text-3xl font-bold tracking-tight text-gray-900">
                    {title || "Judul Halaman"}
                </h1>
                {renderBreadcrumb()}
            </div>
            
            {/* Slot untuk children (biasanya berisi tombol aksi) */}
            <div id="action-area" className="flex items-center gap-3">
                {children}
            </div>
        </div>
    );
}