# -*- coding: utf-8 -*-
{
    'name': "Excel Preview",
    'summary': """
        Excel Preview
    """,
    'description': """
        Excel Preview
    """,
    'author': 'Herianto OY',
    'website': 'https://www.linkedin.com/in/herianto-oy/',
    'category': 'web',
    'version': '0.1',
    'license': 'AGPL-3',
    'depends': ['base', 'report_xlsx'],
    "data": ['views/webclient_templates.xml'],
    "qweb": [
        "static/src/xml/*.xml",
    ],
}
