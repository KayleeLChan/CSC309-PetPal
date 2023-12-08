import React from "react";
import { Button } from 'react-bootstrap';

const PaginationButtons = ({ query, totalPages, setSearchParams }) => {
    const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="text-center h-100 d-flex justify-content-center py-5">
                            <div className="d-flex flex-row justify-content-between align-self-end">
                                {query.page > 1 && query.page <= totalPages ? (
                                    <Button
                                        variant="primary-cream"
                                        onClick={() =>
                                            setSearchParams({ ...query, page: query.page - 1 })
                                        }
                                        className="mx-1"
                                    >
                                        &lt;
                                    </Button>
                                ) : (
                                    <Button
                                        variant="primary-cream"
                                        onClick={() =>
                                            setSearchParams({ ...query, page: query.page - 1 })
                                        }
                                        className="mx-1"
                                        disabled
                                    >
                                        &lt;
                                    </Button>
                                )}
                                
                                {pageButtons.map((pageNumber) => (
                                    <Button
                                        variant={`${query.page === pageNumber ? "primary-orange" : "primary-cream"}`}
                                        onClick={() => setSearchParams({ ...query, page: pageNumber })}
                                        className={`mx-1 ${query.page === pageNumber ? 'text-decoration-underline' : ''}`}
                                    >
                                        {pageNumber}
                                    </Button>
                                ))}

                                {query.page < totalPages ? (
                                    <Button
                                        variant="primary-cream"
                                        onClick={() =>
                                            setSearchParams({ ...query, page: query.page + 1 })
                                        }
                                        className="mx-1"
                                    >
                                        &gt;
                                    </Button>
                                ) : (
                                    <Button
                                        variant="primary-cream"
                                        onClick={() =>
                                            setSearchParams({ ...query, page: query.page + 1 })
                                        }
                                        className="mx-1"
                                        disabled
                                    >
                                        &gt;
                                    </Button>
                                )}
                            </div>
                        </div>
    )
};

export default PaginationButtons;