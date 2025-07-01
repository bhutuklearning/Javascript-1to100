/*
You can open browsers like chrome and firefox(only two are tested as of now).
Then open any website like anywebsite.com from the respective browser. 
Then paste teh following code in the console of the browser to know the local storage status of that 
specific domain. 
*/


(function () {
    // Function to safely determine the type of a value
    function getType(value) {
        try {
            const parsedValue = JSON.parse(value);
            if (parsedValue === null) return "null";
            if (Array.isArray(parsedValue)) return "array";
            return typeof parsedValue;
        } catch (e) {
            return typeof value;
        }
    }


    function getSize(value) {
        return new Blob([value]).size;
    }

    function formatReport() {
        let report = 'Advanced Local Storage Report:\n';
        report += '================================\n\n';

        if (localStorage.length === 0) {
            report += 'Local storage is empty.';
        } else {
            report += `Total items in local storage: ${localStorage.length}\n\n`;

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                const type = getType(value);
                const size = getSize(value);

                report += `Key: ${key}\n`;
                report += `Type: ${type}\n`;
                report += `Size: ${size} bytes\n`;
                report += `Value: ${value}\n`;
                report += '----------------------------\n';
            }
        }
        return report;
    }


    const report = formatReport();
    alert(report);
    console.log(report);
})();
