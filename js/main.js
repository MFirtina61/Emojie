window.onload = function() {
    // Haal opgeslagen waarden op en update de pagina
    var savedText = localStorage.getItem("inputText");
    var savedNumber = localStorage.getItem("inputNumber");
    var savedList = localStorage.getItem("emojiList");
    var savedWordCount = localStorage.getItem("wordCount");

    document.getElementById("inputText").value = savedText || "";
    document.getElementById("inputNumber").value = savedNumber || "";
    document.getElementById("emojiList").innerHTML = savedList || "";
    document.getElementById("wordCount").textContent = savedWordCount || "0";
}



function addEmoji() {
    var text = document.getElementById("inputText").value;
    var count = document.getElementById("inputNumber").value;
    var emojiList = document.getElementById("emojiList");
    
    // Voeg de nieuwe emoji's toe aan de lijst
    for (var i = 0; i < count; i++) {
        var li = document.createElement("li");
        var p = document.createElement("p");
        p.textContent = text;
        li.appendChild(p);
        emojiList.appendChild(li);
    }
    
    countWords(); // Telt woorden na het toevoegen van emoji's

    // Sla de ingevoerde waarden op in de lokale opslag
    localStorage.setItem("inputText", text);
    localStorage.setItem("inputNumber", count);
    localStorage.setItem("emojiList", emojiList.innerHTML);
    localStorage.setItem("wordCount", document.getElementById("wordCount").textContent);
}

function countWords() {
    var wordCount = 0;
    var ul = document.getElementById("emojiList");
    var lis = ul.getElementsByTagName("li");
    
    // Loop door elk li-element en tel de woorden
    for (var i = 0; i < lis.length; i++) {
        var text = lis[i].textContent.trim();
        wordCount += text.split(/\s+/).length;
    }
    document.getElementById("wordCount").textContent = wordCount;
}

function reset() {
    localStorage.clear(); // Verwijder alle opgeslagen waarden
    document.getElementById("inputText").value = "";
    document.getElementById("inputNumber").value = "";
    document.getElementById("emojiList").innerHTML = "";
    document.getElementById("wordCount").textContent = "0";
}