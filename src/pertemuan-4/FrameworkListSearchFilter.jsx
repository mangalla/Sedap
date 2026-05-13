import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkListSearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const _searchTerm = searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag
      ? framework.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-12 antialiased">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Tech <span className="text-indigo-600">Explorer</span>
          </h1>
          <p className="text-slate-500 mt-2 font-light">Temukan framework terbaik untuk ekosistem pengembangan Anda.</p>
        </header>

        {/* Search & Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <div className="md:col-span-2 relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Cari nama atau deskripsi..."
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all outline-none text-slate-700"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <select
              className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500/20 cursor-pointer appearance-none text-slate-600 outline-none transition-all"
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option value="">Semua Kategori</option>
              {allTags.map((tag, index) => (
                <option key={index} value={tag}>{tag}</option>
              ))}
            </select>
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex items-center justify-between px-2">
          <p className="text-sm font-medium text-slate-500">
            Menampilkan <span className="text-indigo-600">{filteredFrameworks.length}</span> framework
          </p>
        </div>

        {/* Framework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFrameworks.length > 0 ? (
            filteredFrameworks.map((item) => (
              <div
                key={item.id}
                className="group bg-white border border-slate-200 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {item.name}
                  </h2>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded">
                    ID: {item.id}
                  </span>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm mb-6 h-12 line-clamp-2">
                  {item.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-50">
                  <div className="flex items-center text-xs text-slate-500">
                    <svg className="h-4 w-4 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Developer: <b className="text-slate-700">{item.details.developer}</b></span>
                  </div>
                  
                  <div className="flex items-center text-xs text-slate-500">
                    <svg className="h-4 w-4 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Rilis: {item.details.releaseYear}</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-indigo-50 text-indigo-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-indigo-100/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={item.details.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center w-full py-2.5 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-indigo-600 transition-colors duration-300"
                >
                  Lihat Dokumentasi
                </a>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-400 italic">Tidak ada framework yang sesuai dengan pencarian Anda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}