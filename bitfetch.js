/** @param {NS} ns */
/** BITFETCH: THE CUSTOMIZABLE INFOFETCH FOR BITBURNER
 * version 1.4.1
 * custom script by starg3n/appak
 * this script is part of the sapph1r3 scriptpack
 * 
 * DOCS:
 * ASCII ART
 *  the ascii art is changable, but It would not be worth it.
 * SECTIONS
 *  you can change the modules that exist.
 *  some are static text variables, such as OS, VERSION, and SAPPH1R3,
 *  but MONEY is ns.getServerMoneyAvailable("home")
 */
export async function main(ns) {
  let os = "  OS: BITBURNER";
  let bio = "  VERSION: v.2.6.2"; // has to be changed every bitburner version
  let saptrue = "  SAPPH1R3 INSTALLED = TRUE";
  let sapfalse= "  SAPPH1R3 INSTALLED = FALSE"
  let homemoney = ns.getServerMoneyAvailable("home"); // returns: home money, no commas or nuttin
  let maxRam = ns.getServerMaxRam("home"); // max ram in gb
  let hacklvl = ns.getHackingLevel()


  // the way it's drawing the ascii is so fucking scuffed but it works...
  let one1="@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@";
  let two2="@@@@@@@@@@@@@@@@@@@@==@@@@@@@@@@@@@@@@@@@@";
  let thr3="@@@@@@@@@@@%*%@@==@@==@@+=@@%*%@@@@@@@@@@@";
  let for4="@@@@@@@*=@@*=*@@==@@==@@+=@@#=*@@=+@@@@@@@"; // this is dumb
  let fiv5="@@@==@@==@@*=*@@==@@==@@+=@@#=*@@==@@==@@@"; // this too but i don't know enough js to fix it
  let six6="@@@==@@==@@*=*@@==@+===@+=@@#=*@@==@@==@@@";
  let sev7="@@@==@@==@@*=*@@==========@@#=*@@==@@==@@@";
  let ate8="@@@==@@==@@*=*@@==========@@#=*@@==@@==@@@";
  let nin9="@@@==@@==@@*=*@@@==%==%==@@@#=*@@==@@==@@@";
  let ten0="@@@==@==+@@*======%@==@%======*@@+==@==@@@";
  let elv1="@@@====@@@@+==%%==@@==@@+=%%===@@@@====@@@";
  let twe2="@@@==%@@@#==%@@@==@@==@@+=@@@%==#@@@@==@@@";
  let thi3="@@@==@@%==#@@@@@==@@==@@+=@@@@@#==#@@==@@@";
  let frt4="@@@==@@==@@@@@@==%@@==@@%==@@@@@@==@@==@@@";
  let fvt5="@@@==@@==@@@@%==@@@====@@@==*####==@@==@@@";
  let sxt6="@@@==*@========@@%==@@==%@@==%%%%==@#==@@@";
  let svt7="@@@@#====@@@@==@@+=@@@@=+@@==@@@@====#@@@@";
  let att8="@@@@@@#==@@@@==@@+=@@@@=+@@==@@@@==*@@@@@@";
  let ntn9="@@@@@@@==@@@@==@@+=*@@#=+@@==@@@@==@@@@@@@";
  let twt0="@@@@@@@+==@@@==@@@%====%@@@==@@@==+@@@@@@@";
  let ttw2="@@@@@@@@@==*@==@@@@@==@@@@@==@#==@@@@@@@@@";
  let bar1="@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@";

  if (ns.fileExists("install.js", "home")) { // test for if you're cool ;)
    ns.tprint(one1, os)
    ns.tprint(two2, bio)
    ns.tprint(thr3, saptrue)
    ns.tprint(for4, "  MONEY: ", homemoney)
    ns.tprint(fiv5, "  RAM: ", maxRam," GB")
    ns.tprint(six6, "  HACK LVL: ", hacklvl)
    ns.tprint(sev7)
    ns.tprint(ate8)
    ns.tprint(nin9)
    ns.tprint(ten0)
    ns.tprint(elv1)
    ns.tprint(twe2)
    ns.tprint(thi3)
    ns.tprint(frt4)
    ns.tprint(fvt5)
    ns.tprint(sxt6)
    ns.tprint(svt7)
    ns.tprint(att8)
    ns.tprint(ntn9)
    ns.tprint(twt0)
    ns.tprint(ttw2)
    ns.tprint(bar1)
    ns.tprint(bar1)
  } 
  else {    // normal fetch if sapph1r3 install.js is not installed
    ns.tprint(one1, os)
    ns.tprint(two2, bio)
    ns.tprint(thr3, sapfalse)
    ns.tprint(for4, "  MONEY: ", homemoney)
    ns.tprint(fiv5, "  RAM: ", maxRam," GB")
    ns.tprint(six6, "  HACK LVL: ", hacklvl)
    ns.tprint(sev7)
    ns.tprint(ate8)
    ns.tprint(nin9)
    ns.tprint(ten0)
    ns.tprint(elv1)
    ns.tprint(twe2)
    ns.tprint(thi3)
    ns.tprint(frt4)
    ns.tprint(fvt5)
    ns.tprint(sxt6)
    ns.tprint(svt7)
    ns.tprint(att8)
    ns.tprint(ntn9)
    ns.tprint(twt0)
    ns.tprint(ttw2)
    ns.tprint(bar1)
    ns.tprint(bar1)
  }
}
