import { useEffect, useState } from "react";
import { fetchCustomerBill } from "../service/customerService";

const Table = () => {
  const [customerBillInfo, setCustomerBillInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchCustomerBill();
        setCustomerBillInfo(result?.data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <div className="container p-8">
      <div className="mx-auto">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-white">
            Customer Billing Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Customer billing info
          </p>
        </div>
        <div className="flex flex-col md:flex-row  justify-center gap-y-[20px] md:gap-x-[20px]"> 
        {customerBillInfo && (
          <div className="card bg-white max-w-[600px]">
            <div className="card-body">
              <div className="card-title text-black"> Payment Details</div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>Current Outstanding balance</td>
                      <td>
                        {
                          customerBillInfo["Payment details"][
                            "Current Outstanding balance"
                          ]
                        }
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>Last Payment Date</td>
                      <td>
                        {
                          customerBillInfo["Payment details"][
                            "Last Payment Date"
                          ]
                        }
                      </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>Last Payment Amount</td>
                      <td>
                        {
                          customerBillInfo["Payment details"][
                            "Last Payment Amount"
                          ]
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>SLT type</td>
                      <td>{customerBillInfo["Payment details"]["SLT type"]}</td>
                    </tr>
                    <tr>
                      <td>Contract Status</td>
                      <td>
                        {
                          customerBillInfo["Payment details"][
                            "Constract Status"
                          ]
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {customerBillInfo && (
          <div className="card bg-white max-w-[600px]">
            <div className="card-body">
              <div className="card-title text-black"> Last bill details</div>
              <div className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Bill period</td>
                      <td>
                        {customerBillInfo["Last bill details"]["Bill period"]}
                      </td>
                    </tr>
                    <tr>
                      <td>Consumption KWh</td>
                      <td>
                        {
                          customerBillInfo["Last bill details"][
                            "Consumption KWh"
                          ]
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Last avg daily consumption KWh</td>
                      <td>
                        {
                          customerBillInfo["Last bill details"][
                            "Last avg daily consumption KWh"
                          ]
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Total Bill this Month</td>
                      <td>
                        {
                          customerBillInfo["Last bill details"][
                            "Total Bill this Month"
                          ]
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Adjustment</td>
                      <td>
                        {customerBillInfo["Last bill details"]["Adjustment"]}
                      </td>
                    </tr>
                    <tr>
                      <td>Payment this Month</td>
                      <td>
                        {
                          customerBillInfo["Last bill details"][
                            "Payment this Month"
                          ]
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Total Amount Payable</td>
                      <td>
                        {
                          customerBillInfo["Last bill details"][
                            "Total Amount Payable"
                          ]
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {customerBillInfo && (
          <div className="card bg-white max-w-[600px]">
            <div className="card-body">
              <div className="card-title text-black">
                {" "}
                Second to last bill details
              </div>
              <div className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Bill period</td>
                      <td>
                        {
                          customerBillInfo["Second to last bill details"][
                            "Bill period"
                          ]
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Consumption KWh</td>
                      <td>
                        {
                          customerBillInfo["Second to last bill details"][
                            "Consumption KWh"
                          ]
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Last avg daily consumption KWh</td>
                      <td>
                        {
                          customerBillInfo["Second to last bill details"][
                            "Last avg daily consumption KWh"
                          ]
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Total Bill this Month</td>
                      <td>
                        {
                          customerBillInfo["Second to last bill details"][
                            "Total Bill this Month"
                          ]
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Adjustment</td>
                      <td>
                        {
                          customerBillInfo["Second to last bill details"][
                            "Adjustment"
                          ]
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Payment this Month</td>
                      <td>
                        {
                          customerBillInfo["Second to last bill details"][
                            "Payment this Month"
                          ]
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Total Amount Payable</td>
                      <td>
                        {
                          customerBillInfo["Second to last bill details"][
                            "Total Amount Payable"
                          ]
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};
export default Table;
