// import React from "react";

// const FiltersPanel = ({ onFilterChange }) => {
//   const handleInputChange = (filterName, value) => {
//     onFilterChange(filterName, value);
//   };

//   return (
//     <div className="card mb-4 shadow-sm">
//       <div className="card-body">
//         <div className="row g-3 align-items-center">
//           <div className="col-md-auto">
//             <h5 className="mb-0">Filters:</h5>
//           </div>
//           <div className="col-md">
//             <label htmlFor="date-filter" className="form-label visually-hidden">
//               Date Range
//             </label>
//             <input
//               id="date-filter"
//               type="date"
//               className="form-control"
//               onChange={(e) => handleInputChange("date", e.target.value)}
//               aria-label="Filter by date"
//             />
//           </div>
//           <div className="col-md">
//             <label
//               htmlFor="loan-type-filter"
//               className="form-label visually-hidden"
//             >
//               Loan Type
//             </label>
//             <select
//               id="loan-type-filter"
//               className="form-select"
//               onChange={(e) => handleInputChange("loanType", e.target.value)}
//               aria-label="Filter by loan type"
//             >
//               <option value="">All Loan Types</option>
//               <option value="Personal">Personal</option>
//               <option value="Business">Business</option>
//               <option value="Mortgage">Mortgage</option>
//             </select>
//           </div>
//           <div className="col-md">
//             <label
//               htmlFor="region-filter"
//               className="form-label visually-hidden"
//             >
//               Region
//             </label>
//             <select
//               id="region-filter"
//               className="form-select"
//               onChange={(e) => handleInputChange("region", e.target.value)}
//               aria-label="Filter by region"
//             >
//               <option value="">All Regions</option>
//               <option value="North">North</option>
//               <option value="South">South</option>
//               <option value="East">East</option>
//               <option value="West">West</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FiltersPanel;


import React from "react";
import "../admin.css"

const FiltersPanel = ({ onFilterChange }) => {
  const handleInputChange = (filterName, value) => {
    onFilterChange(filterName, value);
  };

  return (
    <div className="card filters-panel mb-4">
      <div className="card-body">
        <div className="filter-row align-items-center">
          <div className="col-md-auto">
            <h5 className="mb-0 fw-semibold">Filters</h5>
          </div>
          <div className="col-md">
            <label htmlFor="date-filter" className="filter-label">
              Date Range
            </label>
            <input
              id="date-filter"
              type="date"
              className="form-control"
              onChange={(e) => handleInputChange("date", e.target.value)}
              aria-label="Filter by date"
            />
          </div>
          <div className="col-md">
            <label htmlFor="loan-type-filter" className="filter-label">
              Loan Type
            </label>
            <select
              id="loan-type-filter"
              className="form-select"
              onChange={(e) => handleInputChange("loanType", e.target.value)}
              aria-label="Filter by loan type"
            >
              <option value="">All Loan Types</option>
              <option value="Personal">Personal</option>
              <option value="Business">Business</option>
              <option value="Mortgage">Mortgage</option>
              <option value="Auto">Auto</option>
            </select>
          </div>
          <div className="col-md">
            <label htmlFor="region-filter" className="filter-label">
              Region
            </label>
            <select
              id="region-filter"
              className="form-select"
              onChange={(e) => handleInputChange("region", e.target.value)}
              aria-label="Filter by region"
            >
              <option value="">All Regions</option>
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="East">East</option>
              <option value="West">West</option>
            </select>
          </div>
          <div className="col-md-auto">
            <button 
              className="btn btn-outline-secondary mt-4"
              onClick={() => {
                document.getElementById('date-filter').value = '';
                document.getElementById('loan-type-filter').value = '';
                document.getElementById('region-filter').value = '';
                onFilterChange('clear', '');
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersPanel;