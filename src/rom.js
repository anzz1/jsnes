var Mappers = require("./mappers");
var Tile = require("./tile");

var ROM = function (nes) {
  this.nes = nes;

  this.mapperName = new Array(256);

  this.mapperName[0] = "NoMapper";
  this.mapperName[1] = "Nintendo MMC1B";
  this.mapperName[2] = "UxROM";
  this.mapperName[3] = "CNROM";
  this.mapperName[4] = "Nintendo MMC3";
  this.mapperName[5] = "Nintendo MMC5";
  this.mapperName[6] = "FFE F4xxx";
  this.mapperName[7] = "AxROM";
  this.mapperName[8] = "FFE F3xxx";
  this.mapperName[9] = "Nintendo MMC2";
  this.mapperName[10] = "Nintendo MMC4";
  this.mapperName[11] = "Color Dreams";
  this.mapperName[12] = "FFE F6xxx";
  this.mapperName[13] = "CPROM";
  this.mapperName[15] = "100-in-1 Contra Function 16";
  this.mapperName[16] = "Bandai EPROM (C24C02)";
  this.mapperName[17] = "FFE F8xxx";
  this.mapperName[18] = "Jaleco SS8806";
  this.mapperName[19] = "Namcot 163";
  this.mapperName[20] = "Famicom Disk System";
  this.mapperName[21] = "Konami VRC4a";
  this.mapperName[22] = "Konami VRC2a";
  this.mapperName[23] = "Konami VRC2b";
  this.mapperName[24] = "Konami VRC6";
  this.mapperName[25] = "Konami VRC4b";
  this.mapperName[26] = "Konami VRC6b";
  this.mapperName[28] = "Action 53";
  this.mapperName[30] = "UNROM 512";
  this.mapperName[32] = "Irem G-101";
  this.mapperName[33] = "Taito TC0190/TC0350";
  this.mapperName[34] = "BNROM/NINA-001";
  this.mapperName[36] = "TXC's PCB 01-22000-400";
  this.mapperName[37] = "MMC3Multi";
  this.mapperName[38] = "UNL-PCI556";
  this.mapperName[47] = "MMC3Multi2";
  this.mapperName[48] = "Taito TC0690";
  this.mapperName[64] = "Tengen RAMBO-1";
  this.mapperName[65] = "Irem H-3001";
  this.mapperName[66] = "GxROM";
  this.mapperName[67] = "SunSoft3";
  this.mapperName[68] = "SunSoft4";
  this.mapperName[69] = "SunSoft5";
  this.mapperName[71] = "Camerica";
  this.mapperName[72] = "Jaleco JF-17";
  this.mapperName[73] = "Konami VRC3";
  this.mapperName[75] = "Konami VRC1";
  this.mapperName[76] = "NAMCOT-3446";
  this.mapperName[78] = "Irem 74HC161/32-based";
  this.mapperName[79] = "NINA-06";
  this.mapperName[80] = "Taito X1-005";
  this.mapperName[82] = "Taito X1-017";
  this.mapperName[85] = "Konami VRC7";
  this.mapperName[86] = "Jaleco JF-13";
  this.mapperName[87] = "J87";
  this.mapperName[89] = "Sunsoft2-3";
  this.mapperName[91] = "Pirate HK-SF3 chip";
  this.mapperName[93] = "Sunsoft2-3R";
  this.mapperName[94] = "UN1ROM";
  this.mapperName[95] = "NAMCOT-3425";
  this.mapperName[97] = "Irem TAM-S1";
  this.mapperName[99] = "Vs. System";
  this.mapperName[104] = "PEGASUS 5 IN 1";
  this.mapperName[105] = "NES-EVENT";
  this.mapperName[107] = "Magic Dragon";
  this.mapperName[111] = "GTROM";
  this.mapperName[113] = "HES NTD-8";
  this.mapperName[116] = "SOMARI-P";
  this.mapperName[118] = "TxSROM";
  this.mapperName[119] = "TQROM";
  this.mapperName[120] = "LH15";
  this.mapperName[121] = "Kasheng A9711/A9713";
  this.mapperName[122] = "JY043";
  this.mapperName[123] = "Kasheng H2288";
  this.mapperName[124] = "Super Game Mega Type III";
  this.mapperName[133] = "Sachen 72008";
  this.mapperName[134] = "T4A54A";
  this.mapperName[136] = "Sachen 3011";
  this.mapperName[137] = "Sachen 8259D";
  this.mapperName[138] = "Sachen 8259B";
  this.mapperName[139] = "Sachen 8259C";
  this.mapperName[140] = "Jaleco JF-11/JF-13";
  this.mapperName[141] = "Sachen 8259A";
  this.mapperName[142] = "Kaiser KS202";
  this.mapperName[143] = "Sachen TCA-01";
  this.mapperName[144] = "Death Race";
  this.mapperName[145] = "Sachen SA-72007";
  this.mapperName[146] = "Sachen 3015";
  this.mapperName[147] = "Sachen 3018";
  this.mapperName[148] = "Tengen 800008";
  this.mapperName[149] = "Sachen SA-0036";
  this.mapperName[150] = "Sachen SA-015";
  this.mapperName[153] = "Bandai FCG";
  this.mapperName[154] = "NAMCOT-3453";
  this.mapperName[155] = "Nintendo MMC1B";
  this.mapperName[156] = "DAOU DIS23C01";
  this.mapperName[157] = "Bandai FCG (24C02)";
  this.mapperName[158] = "Tengen 800037";
  this.mapperName[159] = "Bandai FCG (24C01)";
  this.mapperName[160] = "Waixing FS304";
  this.mapperName[161] = "Nanjing FC-001";
  this.mapperName[164] = "PEC-9588";
  this.mapperName[172] = "Super Mega P-4070";
  this.mapperName[173] = "Idea-Tek ET";
  this.mapperName[178] = "Waixing FS305";
  this.mapperName[180] = "Crazy Climber";
  this.mapperName[184] = "Sunsoft1";
  this.mapperName[185] = "CNROM";
  this.mapperName[187] = "Kasheng A98402";
  this.mapperName[188] = "Bandai Karaoke Studio";
  this.mapperName[192] = "Waixing FS308";
  this.mapperName[193] = "NTDEC TC-112";
  this.mapperName[195] = "Waixing FS303";
  this.mapperName[196] = "MRCM";
  this.mapperName[200] = "MG109";
  this.mapperName[206] = "DxROM";
  this.mapperName[212] = "BMC Super HiK 300-in-1";
  this.mapperName[219] = "Kasheng A9461";
  this.mapperName[221] = "NTDEC N625092";
  this.mapperName[224] = "Jncota KT-008";
  this.mapperName[227] = "N120-72";
  this.mapperName[228] = "Action 52";
  this.mapperName[229] = "BMC 31-IN-1";
  this.mapperName[236] = "Realtec 8031/8155";
  this.mapperName[243] = "Sachen SA-020A";
  this.mapperName[245] = "Waixing F003";
  this.mapperName[246] = "G0151-1";
  this.mapperName[249] = "Waixing T9552";

  for (var i = 0; i <= 255; i++) {
    this.mapperName[i] = this.mapperName[i] ? this.mapperName[i] : "Unknown Mapper";
  }
};

ROM.prototype = {
  // Mirroring types:
  VERTICAL_MIRRORING: 0,
  HORIZONTAL_MIRRORING: 1,
  FOURSCREEN_MIRRORING: 2,
  SINGLESCREEN_MIRRORING: 3,
  SINGLESCREEN_MIRRORING2: 4,
  SINGLESCREEN_MIRRORING3: 5,
  SINGLESCREEN_MIRRORING4: 6,
  CHRROM_MIRRORING: 7,

  header: null,
  rom: null,
  vrom: null,
  vromTile: null,

  romCount: null,
  vromCount: null,
  mirroring: null,
  batteryRam: null,
  trainer: null,
  fourScreen: null,
  mapperType: null,
  valid: false,

  load: function (data) {
    var i, j, v;

    if (data.indexOf("NES\x1a") === -1) {
      throw new Error("Not a valid NES ROM.");
    }
    this.header = new Array(16);
    for (i = 0; i < 16; i++) {
      this.header[i] = data.charCodeAt(i) & 0xff;
    }
    this.romCount = this.header[4];
    this.vromCount = this.header[5] * 2; // Get the number of 4kB banks, not 8kB
    this.mirroring = (this.header[6] & 1) !== 0 ? 1 : 0;
    this.batteryRam = (this.header[6] & 2) !== 0;
    this.trainer = (this.header[6] & 4) !== 0;
    this.fourScreen = (this.header[6] & 8) !== 0;
    this.mapperType = (this.header[6] >> 4) | (this.header[7] & 0xf0);
    /* TODO
        if (this.batteryRam)
            this.loadBatteryRam();*/
    // Check whether byte 8-15 are zero's:
    var foundError = false;
    for (i = 8; i < 16; i++) {
      if (this.header[i] !== 0) {
        foundError = true;
        break;
      }
    }
    if (foundError) {
      this.mapperType &= 0xf; // Ignore byte 7
    }
    // Load PRG-ROM banks:
    this.rom = new Array(this.romCount);
    var offset = 16;
    for (i = 0; i < this.romCount; i++) {
      this.rom[i] = new Array(16384);
      for (j = 0; j < 16384; j++) {
        if (offset + j >= data.length) {
          break;
        }
        this.rom[i][j] = data.charCodeAt(offset + j) & 0xff;
      }
      offset += 16384;
    }
    // Load CHR-ROM banks:
    this.vrom = new Array(this.vromCount);
    for (i = 0; i < this.vromCount; i++) {
      this.vrom[i] = new Array(4096);
      for (j = 0; j < 4096; j++) {
        if (offset + j >= data.length) {
          break;
        }
        this.vrom[i][j] = data.charCodeAt(offset + j) & 0xff;
      }
      offset += 4096;
    }

    // Create VROM tiles:
    this.vromTile = new Array(this.vromCount);
    for (i = 0; i < this.vromCount; i++) {
      this.vromTile[i] = new Array(256);
      for (j = 0; j < 256; j++) {
        this.vromTile[i][j] = new Tile();
      }
    }

    // Convert CHR-ROM banks to tiles:
    var tileIndex;
    var leftOver;
    for (v = 0; v < this.vromCount; v++) {
      for (i = 0; i < 4096; i++) {
        tileIndex = i >> 4;
        leftOver = i % 16;
        if (leftOver < 8) {
          this.vromTile[v][tileIndex].setScanline(
            leftOver,
            this.vrom[v][i],
            this.vrom[v][i + 8]
          );
        } else {
          this.vromTile[v][tileIndex].setScanline(
            leftOver - 8,
            this.vrom[v][i - 8],
            this.vrom[v][i]
          );
        }
      }
    }

    this.valid = true;
  },

  getMirroringType: function () {
    if (this.fourScreen) {
      return this.FOURSCREEN_MIRRORING;
    }
    if (this.mirroring === 0) {
      return this.HORIZONTAL_MIRRORING;
    }
    return this.VERTICAL_MIRRORING;
  },

  getMapperName: function () {
    if (this.mapperType >= 0 && this.mapperType < this.mapperName.length) {
      return this.mapperName[this.mapperType];
    }
    return "Unknown Mapper, " + this.mapperType;
  },

  mapperSupported: function () {
    return typeof Mappers[this.mapperType] !== "undefined";
  },

  createMapper: function () {
    if (this.mapperSupported()) {
      return new Mappers[this.mapperType](this.nes);
    } else {
      throw new Error(
        "This ROM uses a mapper not supported by JSNES: " +
          this.getMapperName() +
          "(" +
          this.mapperType.toString().padStart(3, "0") +
          ")"
      );
    }
  },
};

module.exports = ROM;
