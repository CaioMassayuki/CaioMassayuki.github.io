// All Inputs
// Profile
const profileName = document.getElementById('profileName')
const profilePlayer = document.getElementById('profilePlayer')
const profileRace = document.getElementById('profileRace')
const profileOrigin = document.getElementById('profileOrigin')
const profileClass = document.getElementById('profileClass')
const profileEtc = document.getElementById('profileEtc')
// Attributes
const attFor = document.getElementById('attribute_for')
const attDes = document.getElementById('attribute_des')
const attCon = document.getElementById('attribute_con')
const attInt = document.getElementById('attribute_int')
const attSab = document.getElementById('attribute_sab')
const attCar = document.getElementById('attribute_car')
const modFor = document.getElementById('modifier_for')
const modDes = document.getElementById('modifier_des')
const modCon = document.getElementById('modifier_con')
const modInt = document.getElementById('modifier_int')
const modSab = document.getElementById('modifier_sab')
const modCar = document.getElementById('modifier_car')
// Status
const statusMaxHp = document.getElementById('status_maxhp')
const statusHp = document.getElementById('status_hp')
const statusMaxMana = document.getElementById('status_maxmana')
const statusMana = document.getElementById('status_mana')
// Armor
const armorName1 = document.getElementById('armor_name_1')
const armorName2 = document.getElementById('armor_name_2')
const armorDefence1 = document.getElementById('armor_defence_1')
const armorDefence2 = document.getElementById('armor_defence_2')
const armorPenalty1 = document.getElementById('armor_penalty_1')
const armorPenalty2 = document.getElementById('armor_penalty_2')
// Defence
const defenceValue = document.getElementById('defence_value')
const defenceDesMod = document.getElementById('defence_des_mod')
const defenceArmor = document.getElementById('defence_armor')
const defenceShield = document.getElementById('defence_shield')
const defenceOthers = document.getElementById('defence_others')
// Attacks
const attackContainer = document.getElementById('attacks_container')
const attackAddButton = document.getElementById('attack_add')
// Expertise
const expertiseContainer = document.getElementById('expertise_container')
// Skills
const skillsValues = document.getElementById('skills_values')

// Constants
const ALL_ELEMENTS = [
  profileName,
  profilePlayer,
  profileRace,
  profileOrigin,
  profileClass,
  profileEtc,
  attFor,
  attDes,
  attCon,
  attInt,
  attSab,
  attCar,
  modFor,
  modDes,
  modCon,
  modInt,
  modSab,
  modCar,
  statusMaxHp,
  statusHp,
  statusMaxMana,
  statusMana,
  armorName1,
  armorName2,
  armorDefence1,
  armorDefence2,
  armorPenalty1,
  armorPenalty2,
  defenceValue,
  defenceDesMod,
  defenceArmor,
  defenceShield,
  defenceOthers,
  skillsValues,
]

const NUMBER_INPUTS = [
  attFor,
  attDes,
  attCon,
  attInt,
  attSab,
  attCar,
  modFor,
  modDes,
  modCon,
  modInt,
  modSab,
  modCar,
  statusMaxHp,
  statusHp,
  statusMaxMana,
  statusMana,
  armorDefence1,
  armorDefence2,
  armorPenalty1,
  armorPenalty2,
  defenceValue,
  defenceDesMod,
  defenceArmor,
  defenceShield,
  defenceOthers,
]

const EXPERTISES = {
  0: 'Acrobacia *',
  1: 'Adestramento',
  2: 'Atletismo',
  3: 'Atuação',
  4: 'Cavalgar',
  5: 'Conhecimento #',
  6: 'Cura',
  7: 'Diplomacia',
  8: 'Enganação',
  9: 'Fortitude',
  10: 'Furtividade *',
  11: 'Guerra #',
  12: 'Iniciativa',
  13: 'Intimidação',
  14: 'Intuição',
  15: 'Investigação',
  16: 'Jogatina',
  17: 'Ladinagem *#',
  18: 'Luta',
  19: 'Misticismo #',
  20: 'Navegação #',
  21: 'Nobreza #',
  22: 'Ofício',
  23: 'Ofício',
  24: 'Percepção',
  25: 'Pontaria',
  26: 'Reflexos',
  27: 'Religião #',
  28: 'Sobrevivência',
  29: 'Vontade',
}

const EXPERTISES_MOD = {
  0: 'DES',
  1: 'CAR',
  2: 'FOR',
  3: 'CAR',
  4: 'DES',
  5: 'INT',
  6: 'SAB',
  7: 'CAR',
  8: 'CAR',
  9: 'CON',
  10: 'DES',
  11: 'INT',
  12: 'DES',
  13: 'CAR',
  14: 'SAB',
  15: 'INT',
  16: 'CAR',
  17: 'DES',
  18: 'FOR',
  19: 'INT',
  20: 'SAB',
  21: 'INT',
  22: 'INT',
  23: 'INT',
  24: 'SAB',
  25: 'DES',
  26: 'DES',
  27: 'SAB',
  28: 'SAB',
  29: 'SAB',
}

// Handlers
function numberInputHandler() {
  NUMBER_INPUTS.forEach((element) => {
    setInputFilter(element, function (value) {
      return /^-?\d*$/.test(value)
    })
  })
}

function addAttackRow(importedAttacks) {
  const ATTACKS_INPUTS_ID = ['attack_name', 'attack_bonus', 'attack_damage', 'attack_critical', 'attack_type', 'attack_range']
  const ATTACKS_PROPERTY = ['attackName', 'attackBonus', 'attackDamage', 'attackCritical', 'attackType', 'attackRange']

  const attacks = attackContainer.getElementsByClassName('attacks_row')

  if (importedAttacks) {
    ;[...attacks].forEach((element) => attackContainer.removeChild(element))

    importedAttacks.forEach((attack, attackId) => {
      const newAttackContainer = document.createElement('div')
      newAttackContainer.className = 'attacks_row'
      ATTACKS_INPUTS_ID.forEach((item, index) => {
        const attackInput = document.createElement('input')
        attackInput.id = `${item}_${attackId}`
        attackInput.value = attack[ATTACKS_PROPERTY[index]] || ''
        newAttackContainer.appendChild(attackInput)
      })
      attackContainer.appendChild(newAttackContainer)
    })
  } else {
    const newAttackContainer = document.createElement('div')
    newAttackContainer.className = 'attacks_row'

    ATTACKS_INPUTS_ID.forEach((item) => {
      const attackInput = document.createElement('input')
      attackInput.id = `${item}_${attacks.length}`
      newAttackContainer.appendChild(attackInput)
    })

    attackContainer.appendChild(newAttackContainer)
  }
}

// Utils
function setInputFilter(textbox, inputFilter) {
  const events = ['input', 'keydown', 'keyup', 'mousedown', 'mouseup', 'select', 'contextmenu', 'drop']
  events.forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value
        this.oldSelectionStart = this.selectionStart
        this.oldSelectionEnd = this.selectionEnd
      } else if (this.hasOwnProperty('oldValue')) {
        this.value = this.oldValue
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd)
      } else {
        this.value = ''
      }
    })
  })
}

function getAttacks() {
  return [...attackContainer.getElementsByClassName('attacks_row')]
    .filter((_, index) => document.getElementById(`attack_name_${index}`).value !== '')
    .map((_, index) => {
      return {
        attackName: document.getElementById(`attack_name_${index}`).value,
        attackBonus: document.getElementById(`attack_bonus_${index}`).value,
        attackDamage: document.getElementById(`attack_damage_${index}`).value,
        attackCritical: document.getElementById(`attack_critical_${index}`).value,
        attackType: document.getElementById(`attack_type_${index}`).value,
        attackRange: document.getElementById(`attack_range_${index}`).value,
      }
    })
}

function getExpertises() {
  return Object.values(EXPERTISES).map((expertise, index) => {
    const expertiseTotal = document.getElementById(`expertise_total_${index}`)
    const expertiseLvl = document.getElementById(`expertise_lvl_${index}`)
    const expertiseMod = document.getElementById(`expertise_mod_${index}`)
    const expertiseTrain = document.getElementById(`expertise_train_${index}`)
    const expertiseOthers = document.getElementById(`expertise_others_${index}`)
    return {
      expertiseName: expertise,
      expertiseTotal: expertiseTotal.value,
      expertiseLvl: expertiseLvl.value,
      expertiseMod: expertiseMod.value,
      expertiseTrain: expertiseTrain.value,
      expertiseOthers: expertiseOthers.value,
    }
  })
}

function renderExpertises() {
  const EXPERTISE_IDS = ['expertise_lvl', 'expertise_mod', 'expertise_train', 'expertise_others']

  Object.values(EXPERTISES).forEach((item, index) => {
    const expertiseRow = document.createElement('div')
    expertiseRow.className = 'expertise_row'
    const expertiseName = document.createElement('p')
    expertiseName.textContent = item
    expertiseRow.appendChild(expertiseName)
    const expertiseTotal = document.createElement('input')
    expertiseTotal.className = 'expertise_total'
    expertiseTotal.id = `expertise_total_${index}`
    expertiseRow.appendChild(expertiseTotal)
    const expertiseEqual = document.createElement('b')
    expertiseEqual.textContent = '='
    expertiseRow.appendChild(expertiseEqual)
    EXPERTISE_IDS.forEach((expertiseId) => {
      const expertiseInput = document.createElement('input')
      expertiseInput.id = `${expertiseId}_${index}`
      if (expertiseId === 'expertise_mod') {
        expertiseInput.placeholder = EXPERTISES_MOD[index]
      }
      expertiseRow.appendChild(expertiseInput)
    })
    expertiseContainer.appendChild(expertiseRow)
  })
}

function renderImportedExpertises(importedExpertise) {
  const EXPERTISE_IDS = ['expertise_total', 'expertise_lvl', 'expertise_mod', 'expertise_train', 'expertise_others']
  const EXPERTISE_PROPERTIES = ['expertiseTotal', 'expertiseLvl', 'expertiseMod', 'expertiseTrain', 'expertiseOthers']

  Object.keys(EXPERTISES).forEach((expertiseId) => {
    EXPERTISE_IDS.forEach((id, index) => {
      if (EXPERTISES[expertiseId] === importedExpertise[expertiseId]['expertiseName']) {
        document.getElementById(`${id}_${expertiseId}`).value = importedExpertise[expertiseId][EXPERTISE_PROPERTIES[index]] || ''
      }
    })
  })
}

function setFormData(newFormData) {
  profileName.value = newFormData.profileName
  profilePlayer.value = newFormData.profilePlayer
  profileRace.value = newFormData.profileRace
  profileOrigin.value = newFormData.profileOrigin
  profileClass.value = newFormData.profileClass
  profileEtc.value = newFormData.profileEtc
  attFor.value = newFormData.attFor
  attDes.value = newFormData.attDes
  attCon.value = newFormData.attCon
  attInt.value = newFormData.attInt
  attSab.value = newFormData.attSab
  attCar.value = newFormData.attCar
  modFor.value = newFormData.modFor
  modDes.value = newFormData.modDes
  modCon.value = newFormData.modCon
  modInt.value = newFormData.modInt
  modSab.value = newFormData.modSab
  modCar.value = newFormData.modCar
  statusMaxHp.value = newFormData.statusMaxHp
  statusHp.value = newFormData.statusHp
  statusMaxMana.value = newFormData.statusMaxMana
  statusMana.value = newFormData.statusMana
  armorName1.value = newFormData.armorName1
  armorName2.value = newFormData.armorName2
  armorDefence1.value = newFormData.armorDefence1
  armorDefence2.value = newFormData.armorDefence2
  armorPenalty1.value = newFormData.armorPenalty1
  armorPenalty2.value = newFormData.armorPenalty2
  defenceValue.value = newFormData.defenceValue
  defenceDesMod.value = newFormData.defenceDesMod
  defenceArmor.value = newFormData.defenceArmor
  defenceShield.value = newFormData.defenceShield
  defenceOthers.value = newFormData.defenceOthers
  newFormData.attacks.length > 0 && addAttackRow(newFormData.attacks)
  newFormData.expertises && renderImportedExpertises(newFormData.expertises)
  skillsValues.value = newFormData.skillsValues
}

function getFormData() {
  return {
    profileName: profileName.value,
    profilePlayer: profilePlayer.value,
    profileRace: profileRace.value,
    profileOrigin: profileOrigin.value,
    profileClass: profileClass.value,
    profileEtc: profileEtc.value,
    attFor: attFor.value,
    attDes: attDes.value,
    attCon: attCon.value,
    attInt: attInt.value,
    attSab: attSab.value,
    attCar: attCar.value,
    modFor: modFor.value,
    modDes: modDes.value,
    modCon: modCon.value,
    modInt: modInt.value,
    modSab: modSab.value,
    modCar: modCar.value,
    statusMaxHp: statusMaxHp.value,
    statusHp: statusHp.value,
    statusMaxMana: statusMaxMana.value,
    statusMana: statusMana.value,
    armorName1: armorName1.value,
    armorName2: armorName2.value,
    armorDefence1: armorDefence1.value,
    armorDefence2: armorDefence2.value,
    armorPenalty1: armorPenalty1.value,
    armorPenalty2: armorPenalty2.value,
    defenceValue: defenceValue.value,
    defenceDesMod: defenceDesMod.value,
    defenceArmor: defenceArmor.value,
    defenceShield: defenceShield.value,
    defenceOthers: defenceOthers.value,
    attacks: getAttacks(),
    expertises: getExpertises(),
    skillsValues: skillsValues.value
  }
}

// Lifecycle
window.addEventListener('load', () => {
  numberInputHandler()
  renderExpertises()

  // Add Listeners
  attackAddButton.addEventListener('click', (event) => {
    event.preventDefault()
    addAttackRow()
  })

  // Get Data from LocalStorage
  const sheetData = JSON.parse(localStorage.getItem('sheet-data'))
  sheetData && setFormData(sheetData)

  // Get Data from Imported JSON file
  document.getElementById('importButton').addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('jsonData').addEventListener('change', () => {
      const files = document.getElementById('jsonData').files
      if (files.length <= 0) {
        return false
      }

      const fileReader = new FileReader()
      fileReader.onload = function (e) {
        const result = JSON.parse(e.target.result)
        setFormData(result)
      }
      fileReader.readAsText(files.item(0))
    })
    document.getElementById('jsonData').click()
  })

  // Saves to Data to LocalStorage
  setInterval(() => {
    localStorage.setItem('sheet-data', JSON.stringify(getFormData()))
  }, 5000)
})

// Saves data to JSON file
window.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.keyCode === 83) {
    event.preventDefault()
    var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(getFormData()))
    var downloadAnchorNode = document.createElement('a')
    downloadAnchorNode.setAttribute('href', dataStr)
    downloadAnchorNode.setAttribute('download', 'Tormenta 20 - Ficha - ' + getFormData().profileName + '.json')
    document.body.appendChild(downloadAnchorNode)
    downloadAnchorNode.click()
    downloadAnchorNode.remove()
  }
})
