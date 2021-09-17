import React, { useState, useEffect } from "react";

const Bin = () => {
    return(
        <div>
            <div class="row mt-4">
                <h4 class="btn btn-primary btn-lg part-divider">&nbsp;&nbsp;&nbsp;&nbsp;Deleted quizzes&nbsp;&nbsp;&nbsp;&nbsp;</h4>
            </div>
            <div class="container">
                <div class="table-responsive table-hover">
                    <table class="table text-left">
                        <thead class="text-muted">
                            <tr>
                                <th scope="col">Game</th>
                                <th scope="col">Title</th>
                                <th scope="col">  </th>
                                <th scope="col">Question</th>
                                <th scope="col">Grade</th>
                                <th scope="col">Category</th>
                                <th scope="col">Last Modify</th>
                                <th scope="col">  </th>
                                <th scope="col">  </th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Bin;