using tagBackendAPI.EFcontext;
using tagBackendAPI.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();

var app = builder.Build();

app.UseCors(b=>b.AllowAnyOrigin());

app.Run(async (context) =>
{
    string[] HTMLtagFromBD = new string[10];

    //GET
    if(context.Request.Path == "/api/tag")
    {
        using(AplicationContext db = new AplicationContext())
        {
            var tags = db.tagsHtml.ToList();

            foreach(TagsHtml tag in tags)
            {
                HTMLtagFromBD[0] = tag.Tag;
            }
        }

        await context.Response.WriteAsync(HTMLtagFromBD[0]);
    }
});

app.Run();