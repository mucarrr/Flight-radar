import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import c from "../utils/nullCheck";
import { open } from "../redux/slices/DetailSlice";
import ReactPaginate from "react-paginate";

const List = () => {
  const { error, isLoading, flights } = useSelector((store) => store.flight);
  const dispatch = useDispatch();

  const [start, setStart] = useState(0);
  const perPage = 12;
  const end = start + perPage;
  const currFlights = flights.slice(start, end)
  const total = Math.ceil(flights.length / perPage);
  const handlePage = (e)=>{
    setStart(e.selected * perPage)
  }
 

  if (isLoading)
    return (
      <div className="list-wrapper">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="list-wrapper">
        <Error message={error} />
      </div>
    );

 

  return (
    <div className="list-container">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tail Code</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Flight Degree</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currFlights.slice(0, 12).map((flight) => (
            <tr>
              <td>{c(flight.id)}</td>
              <td>{c(flight.code)}</td>
              <td>{c(flight.lat)}</td>
              <td>{c(flight.lng)}</td>
              <td>{c(flight.deg)}</td>
              <td>
                <button onClick={() => dispatch(open(flight.id))}>
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-wrapper">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          className="pagination"
          pageCount={total}
          pageRangeDisplayed={1}
          onPageChange={handlePage}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default List;
