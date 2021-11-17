$(document).ready(function () {
    function createTable(data) {
        let container = $("#container");
        container.css({
            "width": "80vw",
            "margin": "0px auto"
        })
        // table
        let table = $("<table></table>")
        table.attr("id", "table");
        table.css({
            "border": "1px solid black",
            "border-collapse": "collapse",
            "width": "100%"
        });
        $(container).append(table);

        // thead
        let thead =
            `<thead>
        <tr>
        <th>Row</th>
        <th>UID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>City</th>
        <th>Postal Code</th>
        <th>Phone Number</th>
        <th>Position</th>
        </tr>
        </thead>`;
        $(table).append(thead);
        $("thead").css({
            "background-color": "black",
            "color": "white"
        });
        $("th").css({
            "text-align" : "center",
            "padding" : "6px 3px"
        });

        // tbody
        let tbody = $("<tbody></tbody>")
        $(table).append(tbody);
        
        // import data
        data.forEach((user, index) => {
            let currentUser =
                `<tr>
                    <td>${index + 1}</td>
                    <td>${user.uid}</td>
                    <td>${user.firstName}</td>
                    <td>${user.lastName}</td>
                    <td>${user.city}</td>
                    <td>${user.personalCode}</td>
                    <td>${user.phoneNumber}</td>
                    <td>${user.position}</td>
                 </tr>`;

            $("tbody").append(currentUser);
        });

        // td style
        $("td").css({
            "text-align" : "center",
            "padding" : "6px 3px",
            "border" : "1px solid black"
        });

        $("tr:odd").css("background-color", "#CCC");

    }
    createTable(userData);
});