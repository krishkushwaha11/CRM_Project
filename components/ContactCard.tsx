import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Contact } from "@/store/types";
import { formatDate } from "@/utils/formatDate";
import { Link } from "react-router-dom";

interface ContactCardProps {
  contact: Contact;
}

export function ContactCard({ contact }: ContactCardProps) {
  const { id, name, email, company, tags } = contact;

  return (
    <Link to={`/contacts/${id}`}>
      <Card className="contact-card h-full">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium">{name}</h3>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{email}</p>
            {company && (
              <p className="text-sm text-muted-foreground">{company}</p>
            )}
            <div className="pt-2 flex flex-wrap gap-1">
              {tags.map((tag) => {
                // Generate consistent colors based on tag name
                const tagColors = ["red", "blue", "green", "yellow", "purple"];
                const colorIndex = tag
                  .split("")
                  .reduce((acc, char) => acc + char.charCodeAt(0), 0) % tagColors.length;
                const colorClass = `tag-${tagColors[colorIndex]}`;
                
                return (
                  <span key={tag} className={`tag ${colorClass}`}>
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}