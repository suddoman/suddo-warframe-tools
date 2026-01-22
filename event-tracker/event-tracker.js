const A_TIER = "aTier"

async function apiFetch() {
    const WF_URL = "https://api.warframestat.us/pc/";

    const var1 = await fetch(WF_URL);
    const var2 = await var1.json();

    return var2;
}

async function populate(){
    bigAPI = await apiFetch();
    //console.log(bigAPI.fissures[0].node);

    bigAPI.fissures.forEach(fissures => {
        //console.log(fissures.node)
        quality = isMissionGood(fissures);
        if (quality != "Bad"){
            addMission(fissures, quality);
        }
        //addText(fissures.node, "aTier");
    }
    )
}

function isMissionGood(mission){
    //TODO: THIS NEEDS TO BE A BIG LIST. I DON'T KNOW THE CLEANEST WAY TO DO THIS
    //It should be mission.nodeKey compared to a list to check if it is good.
    //There should be multiple tiers, maybe a case statement I dunno.
    if (mission.missionType == "Defense" || mission.missionType == "Void Cascade") {
        //console.log(mission.missionType + " " + mission.nodeKey + " " + mission.tier + " " + isSteelPath(mission.isHard));
        return A_TIER
    }
    //else
    return "Bad"
}

function isSteelPath(isHard){
    if(isHard){return "Steel Path"};
    //else
    return "Wood Path";
}

function addMission(mission, quality){
    addText((mission.missionType + " " + mission.nodeKey + " " + mission.tier + " " + isSteelPath(mission.isHard)),
            quality);
}

function addText(text, location){
    //This is vibe coded beware
    const newElement = document.createElement("div");
    newElement.textContent = text;

    const targetElement = document.getElementById(location);

    targetElement.insertAdjacentElement("afterend", newElement);
}