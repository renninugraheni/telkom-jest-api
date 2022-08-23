const schema =  {
  "definitions": {
      "Welcome10": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
              "user": {
                  "$ref": "#/definitions/User"
              },
              "message": {
                  "type": "string"
              }
          },
          "required": [
              "message",
              "user"
          ],
          "title": "Welcome10"
      },
      "User": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
              "id": {
                  "type": "integer"
              },
              "first_name": {
                  "type": "string"
              },
              "last_name": {
                  "type": "string"
              },
              "email": {
                  "type": "string"
              },
              "nda_signed": {
                  "type": "boolean"
              },
              "source": {
                  "type": "string"
              },
              "phone_number": {
                  "type": "string"
              },
              "signup_stage": {
                  "type": "null"
              },
              "utm_source": {
                  "type": "null"
              },
              "utm_campaign": {
                  "type": "null"
              },
              "utm_medium": {
                  "type": "null"
              },
              "pm_dashboard_token": {
                  "type": "null"
              },
              "user_type": {
                  "type": "string"
              },
              "origin": {
                  "type": "string"
              },
              "address_disabled": {
                  "type": "boolean"
              },
              "organisation": {
                  "type": "null"
              },
              "billing_entity": {
                  "type": "null"
              },
              "bant_answers": {
                  "type": "null"
              },
              "spec_call_nda_signed": {
                  "type": "null"
              },
              "enterprise_lead": {
                  "type": "null"
              },
              "profile_image": {
                  "type": "null"
              },
              "referral_code": {
                  "type": "string"
              },
              "price_multiplier": {
                  "type": "null"
              },
              "enable_referral_code": {
                  "type": "boolean"
              },
              "user_profiles": {
                  "type": "array",
                  "items": {}
              },
              "authtoken": {
                  "type": "string"
              },
              "currency": {
                  "$ref": "#/definitions/Currency"
              },
              "roles": {
                  "type": "string"
              },
              "running_project_count": {
                  "type": "integer"
              },
              "available_currency": {
                  "type": "array",
                  "items": {
                      "type": "string"
                  }
              },
              "available_country": {
                  "type": "array",
                  "items": {
                      "$ref": "#/definitions/AvailableCountry"
                  }
              },
              "setting": {
                  "$ref": "#/definitions/Setting"
              }
          },
          "required": [
              "address_disabled",
              "authtoken",
              "available_country",
              "available_currency",
              "bant_answers",
              "billing_entity",
              "currency",
              "email",
              "enable_referral_code",
              "enterprise_lead",
              "first_name",
              "id",
              "last_name",
              "nda_signed",
              "organisation",
              "origin",
              "phone_number",
              "pm_dashboard_token",
              "price_multiplier",
              "profile_image",
              "referral_code",
              "roles",
              "running_project_count",
              "setting",
              "signup_stage",
              "source",
              "spec_call_nda_signed",
              "user_profiles",
              "user_type",
              "utm_campaign",
              "utm_medium",
              "utm_source"
          ],
          "title": "User"
      },
      "AvailableCountry": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
              "code": {
                  "type": "string"
              },
              "name": {
                  "type": "string"
              }
          },
          "required": [
              "code",
              "name"
          ],
          "title": "AvailableCountry"
      },
      "Currency": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
              "data": {
                  "$ref": "#/definitions/Data"
              }
          },
          "required": [
              "data"
          ],
          "title": "Currency"
      },
      "Data": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
              "id": {
                  "type": "string",
                  "format": "integer"
              },
              "type": {
                  "type": "string"
              },
              "attributes": {
                  "$ref": "#/definitions/Attributes"
              }
          },
          "required": [
              "attributes",
              "id",
              "type"
          ],
          "title": "Data"
      },
      "Attributes": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
              "id": {
                  "type": "integer"
              },
              "name": {
                  "type": "string"
              },
              "code": {
                  "type": "string"
              },
              "exchange_rate": {
                  "type": "number"
              },
              "multiplier": {
                  "type": "number"
              },
              "symbol": {
                  "type": "string"
              },
              "country_code": {
                  "type": "string"
              },
              "default_store_promo_code": {
                  "type": "string"
              },
              "specing_price": {
                  "type": "number"
              },
              "icon_image_file_url": {
                  "type": "string",
                  "format": "uri",
                  "qt-uri-protocols": [
                      "https"
                  ],
                  "qt-uri-extensions": [
                      ".svg"
                  ]
              },
              "instant_spec_price": {
                  "type": "number"
              },
              "tax": {
                  "type": "integer"
              },
              "custom_prototype_price": {
                  "type": "number"
              },
              "post_upfront_price": {
                  "type": "number"
              },
              "tax_type": {
                  "type": "null"
              }
          },
          "required": [
              "code",
              "country_code",
              "custom_prototype_price",
              "default_store_promo_code",
              "exchange_rate",
              "icon_image_file_url",
              "id",
              "instant_spec_price",
              "multiplier",
              "name",
              "post_upfront_price",
              "specing_price",
              "symbol",
              "tax",
              "tax_type"
          ],
          "title": "Attributes"
      },
      "Setting": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
              "avatar_details": {
                  "$ref": "#/definitions/AvatarDetails"
              }
          },
          "required": [
              "avatar_details"
          ],
          "title": "Setting"
      },
      "AvatarDetails": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
              "color_codes": {
                  "$ref": "#/definitions/ColorCodes"
              },
              "initials": {
                  "type": "string"
              }
          },
          "required": [
              "color_codes",
              "initials"
          ],
          "title": "AvatarDetails"
      },
      "ColorCodes": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
              "background": {
                  "type": "string"
              },
              "chat_handle": {
                  "type": "string"
              }
          },
          "required": [
              "background",
              "chat_handle"
          ],
          "title": "ColorCodes"
      }
  }
};

  
module.exports = {
    schema,
};