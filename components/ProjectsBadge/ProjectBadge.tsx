import ClipSpan from "@/components/ClipSpan"
import Badge from "@/components/ui/Badge"
import Icon from "@/components/ui/Icon"

export default function ProjectBadge({ project }) {
  return (
    <Badge className="flex items-center gap-2 border-2 border-project bg-gradient_p_2 px-4 py-0 backdrop-blur-sm">
      <Icon name="Sparkle" size={20} weight="fill" className="text-project" />
      <ClipSpan className="bg-gradient_p_1 text-sm font-semibold leading-none">
        {project?.name}
      </ClipSpan>
    </Badge>
  )
}
