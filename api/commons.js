const Joi = require("joi")

const baseAPI = {
  url:
    "http://nlb-matrix-fargate-dev-6aa59c165225e50d.elb.us-east-1.amazonaws.com:5001/api/v1",
  urlRefresTolken:
    "https://entretenimento-dev.auth.us-east-1.amazoncognito.com/oauth2",
  urlAutentication: "https://script-api.dev.entretenimento.g.globo/",
};

const xApiKey2 = "HsPAc5LDWt5HlzC7xZ0gbarULh79XnGC6n8wtz7v";
const options = {
  method: "POST",
  url:
     "https://entretenimento-dev.auth.us-east-1.amazoncognito.com/oauth2/token",
  headers: {
    "Content-Type": [
      "application/x-www-form-urlencoded",
      "application/x-www-form-urlencoded",
    ],
    Authorization:
      "Basic NGpkNjJtYWxtNWxjdmVkMXVvNHZkOXJpcTA6MTQ1N3RjMjQ4ZjNlNmQ4b2oycXE3aGVwYXZoMzFhdjRnNGJjczY2Z2NuMmE1ZnNyMHVwcw==",
  },
  form: {
    grant_type: "refresh_token",
    client_id: "4jd62malm5lcved1uo4vd9riq0",
    refresh_token:
       "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.Z8mjO85UqWkYuDfJ4aOLBlZrBQ8CKS6PG_uM9IzmVd42t3o-fHeaaNS0drQxRRgiBUvXn2ynx_PDh0Aak8lGc91IlX3W4aFrCVz6SU-jqia_kODbNQFLWkm1-djFXNkQQ5wP_ovJMaL9bAXZOGP198xeBPmTF6gA1-xYRuuccIrWV84lEoTXmS4q8p-uUz7sHiVEnGeE8ZJbCt5r1o97zhIbvRW_dB-g19S1TE4vGGRsAydakvJmT81cjo0UiZpMkWgls_vU-LVwRzwaX-QOlZZFJc8yBSS1jo_yQakRvLah12_iGrr-xyq__1bL-KgvLJuhQ_EukBMvU6NHcxJ05Q.lBIWsy2c-qDYk-RB.1qdeTTRrEA3v-EKLPgLRWeniacS0KInyBEMgAsLsvqAIIooaMXRxNYiUSeBdjB438h9LlIdnD1rLUGR4elMiPFeI1c5ht_quJ8LKYL8-a0MLnj6htaUc6IqRJqsU7gXWanHSJcGM9S4Oz0CQFbD45vPZhmIhH-gX3JEgXnT2VoLpa7cTIv_yuywmlHzWKKy1l-bfXB8b87Bw89oQHGtFzCn8tjV6aHXMmNmRJ8Xz2prRqPmKNplLB6tlwRHFWVbJiNpthWJ9Alik1xG7XNVfDEpAEVV-k1lXtRC4iEAqj6iGwFwV7BDgQAb3TVM7Wx_FmkyTu9QbFgA6vOWkWVHypef--GLr713s0WrZFT325MPo5vQ1HYxdj3Rr8W7Ye5GG8LEoEePWk2PV1SnO_G2d8uoaqVrxLlqFt1arcbdfwdb3YJhqan3ysFeINTNdSYZwVR6tEyADBxb3TR_5UDjhlCHVCMd_i-P9H1l8i6zbhJjdkTzzJpdXlJT4AzcLJXJi6LCjwLjMnDbUlQG3aHX8YmS9zhtitcA5x0Xc1RrzapxsS_y3tNjsbkLQG4BYB67Eh-h1qGCpKz3OnUquLOq10F5TyYNBDlzgTFnZ0KtqkxpzR8oGDEQgQXrTFsfAoLwB55B7GWy7FDzPAv-E3MxGe2eqxhLvqKwBUjtpM87psAbntAms-buDUS2MuzGHr6JUNH4quso8zWa8TU-5cjl3JpeU87COp8CdVGEhj_a1InUS7us2e9oc5P451wRrZPjY7IHEmCoRQ_3_pI9xl7VLEnIXuWtw-i1K_S8bqoFXyL6NbGFiICFWQKvJr_y4KbaLzpyqj8uS43E9L-EywjO3UZ_WvElchlc_AbqmYZyNc3qRvD97SQ58lrEyskiTPIRsh8KTn5r1_BD_298yO0DhxmTroq9lZvkD97OLpAffmWHkvkKH4obkrv8CKZkNwIaowAt3jwrwS5ePddeoh6bOvLrtIL3iRexeY-7exVFSOH7JCAKExx0pGbf57fULYxf2_ThzQU5Zw8Sn98GUnyaWhRiBFdLjGRLD4a1GjJoa_lSlv6fOoxU2IhMFWy9x_33dRxpoSWPAackJg1fVvjBQB3mRRY9nMLisy2PhWWRv1vAHmUM7l22U_-i1qf9YrG8NMy2w7JSoPd2HW8oPZs-Ssg-VLHDRa1kn78v_blTGCc00Jze-xU8kPORITR1KbXM97nm5_jnOpFckB3jKCFJGYFMWEipjJ7WW_rsothnJIw7MYcdJv1ajoyqImQkWV0XGdMwQDlL9n0Q_CEAr9LMzb6ve3eAb3YqQ1EUHHg4ezdLquAn9o4X_P9ln5h918RLGBupDHBFOQseoEr2cnzExn4qn9Pa5fNdZy_vkCKRXsmQeLj_C1-mHZH5XBeSxGl5CvxPa-GVoW2t088Y9UXACbLkszPB1OcZMqDQ.oCuyYSmCmAZ9R4yiaNTtVA",
    redirect_uri: "http://localhost:3000/auth",
  },
};

const schemaObjectIdValue = Joi.object({
    id: Joi.number(),
    value: Joi.string()
});

const validations = Joi.object({
  isSuccess: Joi.bool().required(),
  validations: Joi.optional(
    Joi.array().items(
      Joi.object({
        code: Joi.object({}),
        message: Joi.string(),
        property: Joi.string(),
        data: Joi.object({}),
      })
    )
  ),
  requestId: Joi.string().required(),
  paging: Joi.bool().required(),
});

const emptySchema = Joi.object({});



module.exports = {
  options,
  schemaObjectIdValue,
  validations,
  baseAPI,
  xApiKey2,
  emptySchema
};
