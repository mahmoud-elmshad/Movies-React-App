import React from "react";
import Pagination from "react-bootstrap/Pagination";

export default function Paginationi(props) {
  const [pageArray, setPageArray] = React.useState([]);

  React.useEffect(() => {
    var totPages = parseInt(props.totPages);
    var currentPage = parseInt(props.currentPage);
    var pageArr = [];
    if (totPages > 1) {
      if (totPages <= 9) {
        var i = 1;
        while (i <= totPages) {
          pageArr.push(i);
          i++;
        }
      } else {
        if (currentPage <= 5) pageArr = [1, 2, "", totPages];
        else if (totPages - currentPage <= 4)
          pageArr = [1, 2, 3, 4, 5, "", totPages - 1, totPages];
        else
          pageArr = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            "",
            currentPage - 3,
            currentPage - 2,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            currentPage + 2,
            currentPage + 3,
            "",
            totPages,
          ];
      }
    }
    setPageArray(pageArr);
  }, []);
  return (
    <>
      {/* <Pagination className="justify-content-center">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item>{12}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{19}</Pagination.Item>
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination> */}

      {/* <React.Fragment>
        {props.children} */}
      <div className="" style={{ marginTop: "15px" }}>
        <Pagination
          className="justify-content-center"
          style={{ justifyContent: "center" }}
        >
          {pageArray.map((ele, ind) => {
            const toReturn = [];

            if (ind === 0) {
              toReturn.push(
                <Pagination.First
                  key={"firstpage"}
                  onClick={
                    props.currentPage === 1
                      ? () => {}
                      : () => {
                          props.pageClicked(1);
                        }
                  }
                />
              );

              toReturn.push(
                <Pagination.Prev
                  key={"prevpage"}
                  onClick={
                    props.currentPage === 1
                      ? () => {}
                      : () => {
                          props.pageClicked(props.currentPage - 1);
                        }
                  }
                />
              );
            }

            if (ele === "") toReturn.push(<Pagination.Ellipsis key={ind} />);
            else
              toReturn.push(
                <Pagination.Item
                  key={ind}
                  active={props.currentPage === ele ? true : false}
                  onClick={
                    props.currentPage === ele
                      ? () => {}
                      : () => {
                          props.pageClicked(ele);
                        }
                  }
                >
                  {ele}
                </Pagination.Item>
              );

            if (ind === pageArray.length - 1) {
              toReturn.push(
                <Pagination.Next
                  key={"nextpage"}
                  onClick={
                    props.currentPage === ele
                      ? () => {}
                      : () => {
                          props.pageClicked(props.currentPage + 1);
                        }
                  }
                />
              );

              toReturn.push(
                <Pagination.Last
                  key={"lastpage"}
                  onClick={
                    props.currentPage === ele
                      ? () => {}
                      : () => {
                          props.pageClicked(ele);
                        }
                  }
                />
              );
            }

            return toReturn;
          })}
        </Pagination>
      </div>
      {/* </React.Fragment> */}
    </>
  );
}
