"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          userName: "alanvillanueva",
          firstName: "alan",
          lastName: "villanueva",
          email: "alan@work.org",
          phone: "1111111111",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "ricardovillanueva",
          firstName: "ricardo",
          lastName: "villanueva",
          email: "ricard@work.org",
          phone: "2222222222",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "geroginavillanueva",
          firstName: "gerogina",
          lastName: "villanueva",
          email: "gerogina@work.org",
          phone: "333333333",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "PersonalInfos",
      [
        {
          name: "Alan",
          lastName: "Villanueva",
          second_last_name: "Paredes",
          gender: "male",
          gender_other: "female",
          date_of_birth: " 6 may 1997",
          city_of_birth: "Mérida",
          state_of_birth: "Yucatán",
          country_of_birth: "México",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ricardo",
          lastName: "Villanueva",
          second_last_name: "Paredes",
          gender: "male",
          gender_other: "female",
          date_of_birth: " 31 august 1995",
          city_of_birth: "Mérida",
          state_of_birth: "Yucatán",
          country_of_birth: "México",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Georgina",
          lastName: "Villanueva",
          second_last_name: "Paredes",
          gender: "male",
          gender_other: "female",
          date_of_birth: " 19 november 2003",
          city_of_birth: "Mérida",
          state_of_birth: "Yucatán",
          country_of_birth: "México",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Addresses",
      [
        {
          street: "12",
          in_between_street_a: "43",
          in_between_street_b: "32",
          city: "Mérida",
          state: "Yucatán",
          country: "Mexico",
          zip: "93888",
          proof_of_address: "CFE",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          street: "54",
          in_between_street_a: "3",
          in_between_street_b: "12",
          city: "Tlahuac",
          state: "CDMX",
          country: "Mexico",
          zip: "534245",
          proof_of_address: "JAPAY",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          street: "66",
          in_between_street_a: "23",
          in_between_street_b: "98",
          city: "groninger",
          state: "groninger",
          country: "netherlands",
          zip: "54327",
          proof_of_address: "IZZI",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "AddressExtraInfos",
      [
        {
          type_of_residency: "house",
          other_residency: "my parents",
          people: "many",
          addressId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type_of_residency: "bulding",
          other_residency: "my brothers",
          people: "few",
          addressId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type_of_residency: "office",
          other_residency: null,
          people: "few",
          addressId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "GovernmentInfos",
      [
        {
          CURP: "FSDFSDFT543",
          identification_number: "4252345235",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CURP: "HDHDGFFD67546544",
          identification_number: "32534532",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CURP: "DFGDFHG546365",
          identification_number: "324523",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Profiles",
      [
        {
          phone: "53245235345",
          country_code: "543",
          email: "alan@alan.alan",
          alt_email: "daniel@daniel.daniel",
          reference: "parents",
          other_reference: "friends",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          phone: "45326234",
          country_code: "654",
          email: "test@test.org",
          alt_email: "hola@hola.hola",
          reference: "friends",
          other_reference: "more friends",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          phone: "45326",
          country_code: "72",
          email: "bicho@bicho.com",
          alt_email: "this@is.example",
          reference: "parents",
          other_reference: "sliblings",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "AcademicInfos",
      [
        {
          software_devel_comments: "nice",
          degree_level: "master",
          informal_education: "none",
          other_education: "arts",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          software_devel_comments: "very well",
          degree_level: "master",
          informal_education: "none",
          other_education: "racing",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          software_devel_comments: "bad",
          degree_level: "none",
          informal_education: "highschool",
          other_education: "sports",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "FormalEducationInfos",
      [
        {
          university_name: "ITK",
          state: "Mérida",
          country: "Mexico",
          career_name: "Software developement",
          classes_completed: true,
          proof_classes_completed: "document",
          degree_completed: true,
          proof_degree_completed: "document",
          license_completed: true,
          proof_license_completed: "document",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          university_name: "UADY",
          state: "Yucatán",
          country: "Mexico",
          career_name: "LM",
          classes_completed: true,
          proof_classes_completed: "document",
          degree_completed: true,
          proof_degree_completed: "document",
          license_completed: true,
          proof_license_completed: "document",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          university_name: "UP",
          state: "Yucatán",
          country: "Mexico",
          career_name: "Medicin",
          classes_completed: true,
          proof_classes_completed: "document",
          degree_completed: true,
          proof_degree_completed: "document",
          license_completed: true,
          proof_license_completed: "document",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "ScholarshipInfos",
      [
        {
          level: "master",
          kind: "yes",
          period: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: "master",
          kind: "no",
          period: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: "phd",
          kind: "yes",
          period: 4,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "BankAccountInfos",
      [
        {
          acc_number: 524431,
          clabe: 54646,
          bank: "HSBC",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          acc_number: 34532243,
          clabe: 35325542,
          bank: "HSBC",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          acc_number: 32453252,
          clabe: 3523,
          bank: "BANREGIO",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Skills",
      [
        {
          preferred_programming_language: "HTML",
          experience: "1 year",
          disability: "deaf",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          preferred_programming_language: "CSS",
          experience: "1 year",
          disability: "none",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          preferred_programming_language: "JAVASCRIPT",
          experience: "six years",
          disability: "blind",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("PersonalInfos", null, {});
    await queryInterface.bulkDelete("Adresss", null, {});
    await queryInterface.bulkDelete("AdressExtraInfos", null, {});
    await queryInterface.bulkDelete("GovernmentInfos", null, {});
    await queryInterface.bulkDelete("GovernmentInfos", null, {});
    await queryInterface.bulkDelete("Profiles", null, {});
    await queryInterface.bulkDelete("AcademicInfos", null, {});
    await queryInterface.bulkDelete("FormalEducationInfos", null, {});
    await queryInterface.bulkDelete("ScholarshipInfos", null, {});
    await queryInterface.bulkDelete("BankAccountInfos", null, {});
  },
};
